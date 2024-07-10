// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TaskManager {
    struct Task {
        string description;
        bool completed;
    }

    Task[] private tasks;

    function addTask(string memory _description) public {
        tasks.push(Task(_description, false));
    }

    function getTasks() public view returns (Task[] memory) {
        return tasks;
    }

    function markTaskCompleted(uint256 _index) public {
        require(_index < tasks.length, "Task index out of bounds");
        tasks[_index].completed = true;
    }

    function removeCompletedTasks() public {
        uint256 i = 0;
        while (i < tasks.length) {
            if (tasks[i].completed) {
                for (uint256 j = i; j < tasks.length - 1; j++) {
                    tasks[j] = tasks[j + 1];
                }
                tasks.pop();
            } else {
                i++;
            }
        }
    }
}
