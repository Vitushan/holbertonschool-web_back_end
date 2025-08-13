#!/usr/bin/env python3
"""
this is a module for interpreting Python3
"""


from typing import Dict


def get_hyper_index(self, index: int = 0, page_size: int = 10) -> Dict:
    """
    Return page of data
    """
    dataset = self.indexed_dataset()
    assert 0 <= index < len(dataset), "Index out of range"

    data = []
    current_index = index
    collected = 0

    while collected < page_size and current_index < len(dataset):
        if current_index in dataset:
            data.append(dataset[current_index])
            collected += 1
            current_index += 1

    return {
        'index': index,
        'next_index': current_index,
        'page_size': len(data),
        'data': data
    }
