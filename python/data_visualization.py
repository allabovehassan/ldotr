import pandas as pd
import matplotlib.pyplot as plt

# Data Visualization
def plot_age_distribution(df, column):
    df[column].value_counts().sort_index().plot(kind='bar')
    
    plt.xlabel('Age')
    plt.ylabel('Number of Users')
    plt.title('Age Distribution of Users')

    plt.show()

# Example usage
df = pd.read_csv('your_input_file.csv')
plot_age_distribution(df, 'age')
