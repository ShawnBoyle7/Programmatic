Dijkstra's Algorithm Visualization:

Creating the grid:
we created the grid using nested for loops.
The indices of the for loops were used to asign row and column values to our grid cells
For modularity, each loop created a GridCell modal
    The cell's  were assigned two classNames on creation:
        1. row and column
        2. a boolean for whether or not the cell would be a node
        (this information was passed to the modal via props)

The data:
we hard coded in our nodes.
the logic for assigning edges to randomly generated or user created nodes was outside of the scope of feasibilty given our one week build time frame.
We hope to implement this funtionality in the future.
Each node is a json object (easy to import and key into values using javascript)
The nodes contain:
    their own coordinate
    the coordinate of their neghboring nodes
    the edges leading to those neighboring nodes
    and the weight of those edges (we chose to equate distance with weight)

The dijkstraAlgorithim function:
We kept track of:
    the traversal order (used later for the visual rendering)
    the nodes that would be searched after the current node
        (along with the path of nodes to that node, and the total weight of the path up to that node)
    the nodes we've already visited (this is a set to avoid repeat values)

The search:
we'd check if the current node was the target node we were looking for
    if it was: the current node's path array was dijkstra's path to the target node
    if it wasn't we'd check the current node's neighboring nodes.
    compare the total weights of each of the prospective paths
    repeat until we've reached the target node.

Animating the traversal:
Once the dijkstraAlgorithm function has been run, we take the returned traversal order and iterate through adding a css class to animate the traversal.
Once the traversal animation is done rendering, we take the ideal path (also from the return of the dijkstraAlgorithm function), iterate through and add a css class to animate the ideal path.



Search Dropdown:
to prevent the dropdown from being too long and obscuring most of the page, we limited the results render to a max of 5 results.
as the user inputs a search query, the search results are split into the characters that match, the characters before the match, and the characters after the match. this allows us to add styling to indicate which portion of the result matches the user input.



Scroll Buttons:
The conditional rendering for the horizontal scroll buttons on the learning path was a click behind (after you've reached the end of the scrollable area, you needed to click one more time for the button to disappear)
We realized this was because our logic to determine whether or not there was scrollable area remaining was running before the value .scrollLeft was updated.
We rectified this by:
    1. creating a variable to calculate the new scroll position
    2. using that variable in our logic instead of value that .scrollLeft returned

*keyfames

