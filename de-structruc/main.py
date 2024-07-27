import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

def visulations(file_path):
    df = pd.read_csv(file_path)
    
    sns.pairplot(df)
    plt.title('Pairplt of the dataset')
    plt.show()

    if df.iloc[:, 0].dtype == 'object':
        sns.countplot(x = df.columns[0],data = df)
        plt.title('Bar chart')
        plt.xlabel(df.columns[0])
        plt.ylabel('count')
        plt.show()
    else:
        print('no column found in plot bar chart')

file_path = ''