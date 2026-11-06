import ast
import sys

def check_for_bugs(file_path):
    try:
        # Open and read the target file
        with open(file_path, 'r') as file:
            source_code = file.read()
            
        # Attempt to parse the code
        ast.parse(source_code)
        print(f"✅ All good! No syntax bugs found in '{file_path}'.")
        
    except FileNotFoundError:
        print(f"❌ Error: The file '{file_path}' does not exist.")
        
    except SyntaxError as bug:
        # Catch the bug and explain it
        print(f"🐛 BUG FOUND in '{file_path}'!")
        print(f"  -> Type: Syntax Error")
        print(f"  -> Line: {bug.lineno}")
        print(f"  -> Details: {bug.msg}")
        if bug.text:
            print(f"  -> Problematic Code: {bug.text.strip()}")
        print("\n💡 How to fix: Look at the line above. Check for missing parentheses '()', missing colons ':', or misspelled words.")

if __name__ == "__main__":
    # Ask the user for the file they want to check
    file_to_check = input("Enter the name of the Python file to check (e.g., script.py): ")
    check_for_bugs(file_to_check)
