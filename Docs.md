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

The dijkstraAlgothim function:
We kept track of:
    the traversal order (used later for the visual rendering)
    the nodes that would be searched after the current node
        (along with the path of nodes to that node, and the total weight of the path up to that node)
    the nodes we've already visited (this is a set to avoid repeat values)
The search:
    we'd check if the current node was the target node we were looking for
        if it was: the current node's path array was dijkstra's path to the target node
        if it wasn't we'd check the current node's neighboring nodes.
            if a neighboring node had already been visted, we ignored it.


