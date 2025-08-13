# Pagination Project

## Description
This project demonstrates different techniques for implementing pagination in a REST API using Python.  
Pagination is the process of dividing a large dataset into smaller, more manageable chunks (pages) to improve performance, reduce bandwidth usage, and enhance user experience.

The dataset used for this project is **Popular_Baby_Names.csv**.

---

## Learning Objectives
By the end of this project, you should be able to:

1. **Paginate a dataset with simple `page` and `page_size` parameters**  
   - Retrieve only a subset of data based on the requested page number and page size.

2. **Paginate a dataset with hypermedia metadata (HATEOAS)**  
   - Include additional metadata in the API response such as:
     - `page_size`
     - `page`
     - `next_page`
     - `prev_page`
     - `total_pages`
   - Help clients navigate between pages easily.

3. **Paginate in a deletion-resilient manner**  
   - Ensure pagination still works correctly even if items are removed from the dataset between requests.

---

## Requirements
- **OS**: Ubuntu 20.04 LTS
- **Python**: 3.9
- Code must:
  - End with a new line.
  - Start with:
    ```python
    #!/usr/bin/env python3
    ```
  - Follow **pycodestyle** (version 2.5.*) standards.
- Include a **README.md** at the root of the project.
- All modules, functions, and methods must have complete **docstrings** explaining their purpose.
- All functions must be **type-annotated**.

---

## Resources
Before starting, read/watch:
- [REST API Design: Pagination](https://restfulapi.net/rest-api-design-tutorial-with-example/#pagination)
- [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS)

---

## Dataset
The dataset used in this project is **Popular_Baby_Names.csv**.

---
