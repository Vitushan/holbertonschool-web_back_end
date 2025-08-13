#!/usr/bin/env python3
"""
this is a module for interpreting Python3
"""


import csv
import math
from typing import List, Dict


def index_range(page: int, page_size: int):
    """
    The start and end indices for pagination
    """
    start_index = (page - 1) * page_size
    end_index = page * page_size
    return start_index, end_index


class Server:
    """
    Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """
        dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]
        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """Return the data for the requested page"""
        assert isinstance(page, int) and page > 0, \
            "page must be a positive integer"
        assert isinstance(page_size, int) and page_size > 0, \
            "page_size must be a positive integer"

        start, end = index_range(page, page_size)
        data = self.dataset()
        return data[start:end]

    def get_hyper(self, page: int = 1, page_size: int = 10) -> Dict:
        """
        Return a hypermedia pagination dictionary
        """
        data_page = self.get_page(page, page_size)
        total_items = len(self.dataset())
        total_pages = math.ceil(total_items / page_size)

        hypermedia = {
            "page_size": len(data_page),
            "page": page,
            "data": data_page,
            "next_page": page + 1 if page < total_pages else None,
            "prev_page": page - 1 if page > 1 else None,
            "total_pages": total_pages
        }
        return hypermedia
