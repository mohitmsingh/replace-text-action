# Replace Text Action

A custom GitHub Action to replace occurrences of a text in a file with another text.

## Inputs
- `OriginalText`: The text to be replaced (required).
- `ReplaceText`: The replacement text (required).
- `FilePath`: Path to the file where the replacement should happen (required).

## Outputs
- `Result`: Success or failure message.

## Example Usage

```yaml
jobs:
  replace-text-job:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
      
      - name: Replace text in file
        uses: mohitmsingh/replace-text-action@v1
        with:
          OriginalText: "Hello"
          ReplaceText: "Hi"
          FilePath: "./example.txt"
