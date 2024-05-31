import pytest
import subprocess
import os

def setup_module(module):
    """ Setup any state specific to the execution of the given module."""
    os.makedirs('book/content/notebooks/data', exist_ok=True)

def test_notebook_execution():
    notebook_path = 'book/content/notebooks/Rabies_project_updated_may_2024.ipynb'
    result = subprocess.run(['jupyter', 'nbconvert', '--execute', notebook_path, '--to', 'notebook', '--stdout'], capture_output=True, text=True)
    assert result.returncode == 0, f"Execution failed: {result.stderr}"

def test_html_build():
    build_path = 'book/_build/html/index.html'
    assert os.path.exists(build_path), "HTML build failed, index.html not found"
