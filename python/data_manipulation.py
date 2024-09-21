import pandas as pd

# Data Manipulation
def top_5_rows(df, column, threshold):
    filtered_df = df[df[column] > threshold]
 
    return filtered_df.head(5)

# Example usage
df = pd.read_csv('your_input_file.csv')
result = top_5_rows(df, 'age', 30)
print(result)
