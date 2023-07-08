import re


"""
Expected Output
Abraham Lincoln
Andrew P Garfield
Connor Milliken
Jordan Alexander Williams
None
None
"""
test_Case = 'Abraham Lincoln, Andrew P Garfield, Connor Milliken, Jordan Alexander Williams, None, None'


name = re.compile('([A-Z][a-z]+ [A-Za-z]+ [A-Z][a-z]+)')
# name = re.compile('([A-Z][a-z]+ [A-Z][a-z]+)')
f_names = name.findall(test_Case)
print(f_names)

with open('test.txt') as f:
    data = f.read()
    print(data)