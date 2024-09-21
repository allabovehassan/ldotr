import pandas as pd

# Data Cleaning
def clean_csv(input_file, output_file):
    df = pd.read_csv(input_file)
    cleaned_df = df.dropna()
    cleaned_df.to_csv(output_file, index=False)
    
    return cleaned_df


# Example usage
input_file = 'inputfil'
output_file = './sampledata/output'
cleaned_data = clean_csv(input_file, output_file)
print(cleaned_data)
