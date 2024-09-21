import pandas as pd
import numpy as np

# Descriptive Statistics
def descriptive_statistics(df, column):
    mean = np.mean(df[column])
    median = np.median(df[column])
    std_dev = np.std(df[column])
    
    return {
        'mean': mean,
        'median': median,
        'standard deviation': std_dev
    }

# Example usage
df = pd.read_csv('your_input_file.csv')
stats = descriptive_statistics(df, 'age')
print(stats)
