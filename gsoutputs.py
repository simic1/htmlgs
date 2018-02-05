# Import packages
import pandas as pd
import math
import pint

# output info class


class GSoutputs:
    def __init__(self, version, modelname, simtime, exptime, variablename,
                 path, description, nosteps, noreal, weights, variables,
                 timeseries):
        self.version = version
        self.modelname = modelname
        self.simtime = simtime
        self.exptime = exptime
        self.variablename = variablename
        self.path = path
        self.description = description
        self.nosteps = nosteps
        self.noreal = noreal
        self.weights = weights
        self.variables = variables
        self.timeseries = timeseries

    # add core funtions that should be used on a time series (conversion units)
    def __stats__(self, other):
        return 2


def readFile(filename):
    file = []

    # read file description
    df = pd.read_csv(filename, header=None, nrows=10)
    for index, row in df.iterrows():
        file.append(df[0][index].split(":", 1)[1])

    file[7] = int(file[7])
    file[8] = int(file[8])
    file[9] = file[9].split('\t')
    del file[9][0]
    file[9] = list(map(int, file[9]))
    # read variables included and units
    length = len(pd.read_csv(filename).index)
    numVar = math.floor((length-10)/file[7])
    variables = []
    for i in range(numVar):
        df = pd.read_csv(filename, skiprows=10+i*(file[7]+4), header=None,
                         nrows=2)
        variables.append({'variable': df[0][0].split(":", 1)[1], 'unit':
                         df[0][1].split(":", 1)[1]})
    variables = pd.DataFrame(variables)
    file.append(variables)

    # read times series
    header = []
    for i in range(0, file[8]+2):
        if i == 0:
            header.append('date')
        else:
            header.append(i)

    df_compiled = ""
    for i in range(numVar):
        df = pd.read_table(filename, names=header, skiprows=14+i*(file[7]+4),
                           nrows=file[7], sep='\t')
        df.drop(columns=file[8]+1, inplace=True)
        df['date'] = pd.to_datetime(df.date,  format='%d/%m/%Y %H:%M:%S')
        df = pd.melt(df, id_vars='date')
        df.rename(columns={'variable': 'real'}, inplace=True)
        df['real'] = pd.to_numeric(df['real'])
        df['value'] = pd.to_numeric(df['value'], downcast='float')
        df.rename(columns={'value': file[10]['variable'][i]}, inplace=True)
        if i == 0:
            df_compiled = df
        else:
            df_compiled = df_compiled.merge(df, how="inner")
    tuples = list(zip(df_compiled['date'], df_compiled['real']))
    index = pd.MultiIndex.from_tuples(tuples, names=['date', 'real'])
    df_compiled.set_index(index, drop=True, inplace=True)
    df_compiled.drop(columns=['date', 'real'], inplace=True)
    file.append(df_compiled)
    output = GSoutputs(file[0], file[1], file[2], file[3], file[4], file[5],
                       file[6], file[7], file[8], file[9], file[10], file[11])
    return output

# main


def Main():
    #    ts = readTS()
    filename = 'data/MultipleOutputs.txt'
    ds = readFile(filename)
    df = ds.timeseries
    ds.timeseries.to_json('cleaned/export.json')
    ds.timeseries.to_csv('cleaned/export.csv')
    ureg = pint.UnitRegistry()
    print(ds.timeseries.groupby(level=[0]).quantile(0.1).head())
    print(ds.timeseries.groupby(level=[0]).quantile(0.5).head())
#     print(ds.timeseries.groupby(ds.timeseries.index.get_level_values('date').year).sum())
#    ds.timeseries.groupby(ds.timeseries.index.get_level_values('date').year).hist()
#     print(ds.timeseries.iloc[[0, 2], ds.timeseries.columns.get_indexer(['date
#     ', 'flow'])])
#     print(df.query('real ==1'))
#     print(df.query('real ==1').as_matrix())
#     plt.plot(df.query('real ==1').as_matrix())
    arr = df.query('real ==1').as_matrix()
    print(arr[0][0]*ureg.meter+arr[0][1]*ureg.cm)
#    print(df.head())
#    df.to_csv('test.csv')
#    ts.plot(y='value')

if __name__ == '__main__':
    Main()
