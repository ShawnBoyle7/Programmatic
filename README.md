# Programmatic 
![Logo](https://i.imgur.com/kKu4jsO.png)

## Introduction

**Programmatic** is a developer's curriculum platform. We set out to help those who struggle to solidify an understanding of abstract computer science and programming concepts, by breaking them down with thorough but succinct courses, lessons, and visualizations. Visit our Visualizations page for animations and diagrams of Data Structures & Algorithms to assist your learning. You can personalize your own learning path to set clear goals for your aspirations as a developer. In your path, you can add a course or a specific lesson that you plan to complete, which you can check as complete when you're done!

## [Visualize Your Learning with Programmatic here!](https://programmatic-app.herokuapp.com/)

## Table of Contents

1. [Introduction](#introduction)
2. [Technologies](#technologies)
3. [Documentation](#documentation)
4. [Development](#development)
5. [How To Use](#how-to-use)
6. [Code Highlights](#code-highlights)
7. [Future Plans](#future-plans)

## Technologies

* JavaScript
* Python
* HTML
* CSS
* React
* Redux
* Flask-SQLAlchemy
* Node.js
* AWS S3
* Docker
* Heroku

## Documentation

* [Database Schema](https://github.com/ShawnBoyle7/Programmatic/wiki/Database-Schema)
* [Redux State](https://github.com/ShawnBoyle7/Programmatic/wiki/State)
* [Component List](https://github.com/ShawnBoyle7/Programmatic/wiki/React-Components)
* [User Stories](https://github.com/ShawnBoyle7/Programmatic/wiki/User-Stories)
* [Feature List](https://github.com/ShawnBoyle7/Programmatic/wiki/Feature-List)
* [API Routes](https://github.com/ShawnBoyle7/Programmatic/wiki/API-Routes)
* [Frontend Routes](https://github.com/Programmatic/Zoolodex/wiki/Frontend-Routes)

## Development

1. Clone the repository at https://github.com/ShawnBoyle7/Programmatic
2. Install depdencies  
```py
pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt 
```
4. Set up your postgreSQL user and database. <br></br>
5. Create the .env file. You can use my env example as a reference, ensure your settings match your local database from last step. <br></br>
6. Enter your virtual environment, migrate and seed your database, then run the backend application.  
```py
pipenv shell
```
```py
flask db upgrade
```
```py
flask seed all
```
```py
flask run
```  
7. Enter react-app and install your dependencies, then run the frontend application.  
```py 
npm install
```
```py 
npm start
```

## How To Use

### Splash

When you first load up the website, you'll encounter this splash page where you can sign up, log in.

![Splash](https://i.imgur.com/YGFRBVT.png)

You will need to be signed in to view a lesson, comment, or access the profile and learning path feature. If you'd like to try out those features feel free to use the Demo!

### Visualizations

Once you navigate to the visualizations section, you'll encounter this page showing a list of our visualizations. You can click one to visualize the algorithm. 

![Visualizations](https://i.imgur.com/GbyzCe9.png) 

### Visualization Modal

After clicking on an algorithm, this modal will appear with a graph of nodes. You can click visualize to play the traversal animation and shortest path, faster for 2x speed, slower for 0.5x speed, or reset to reset the graph.

![Visualization Modal](https://i.imgur.com/m0qBB07.png)

### Home

When you are logged in, you'll see this page rather than the splash, which displays our highest rated lessons from user votes descending.

![Home](https://i.imgur.com/Zy5Glkw.png)

### Courses

When on the courses page, you'll see a list of clickable courses which contain lessons. If logged in, you can add them to your learning path if any lessons in them aren't in your learning path already.

![Courses](https://i.imgur.com/nqdiPZh.png)

### Lessons

When on the lessons page, you'll see a list of clickable lessons that take you to the individual lesson page. You will need to be logged in to access this, so go ahead and click the demo button if you haven't already! If logged in, you can also add these to your learning path if they aren't in your learning path already.

![Lessons](https://i.imgur.com/48dd2iU.png)

### Lesson

When on the lesson page, you'll be met with a title and description of the lesson, proceeded by a diagram or representational image, and the course content text below it.

![Lesson](https://i.imgur.com/4SMiVDp.png)

### Feedback

If logged in while on the lesson page, you can comment below the lesson or vote below the comment section to share your feedback!

![Feedback](https://i.imgur.com/Hl6pmD3.png)

### Profile

Now on your profile page, you can view the courses and lessons you've added to your learning path. If you want to move it to completed, or remove it, you can hover over the circles to display buttons to do so.

![Profile](https://i.imgur.com/WYqJLhN.png)

### Edit Account

While on your profile, you can edit your account details by hovering over your profile image and clicking the pencil. It will display a modal to edit your details.

![Edit Account](https://i.imgur.com/iNFOOXI.png)

## Code Highlights
### This is Dijkstra's shortest path being used to animate the traversal process of the algorithm through a graph. The shortest path is also rendered after the traversal.

```js
const graphNodes = require('../../data/dijkstra_graph_data.json')

function DijkstraVisualization() {

    const checkIfNode = (key) => {
        const node = graphNodes[key]
        return node ? true : false
    }

    const createGrid = () => {
        const gridCells = []
        for (let row = 0; row < 20; row++) {
            for (let column = 0; column < 30; column++) {
                gridCells.push(<GridCell key={`r${row}c${column}`} row={row} column={column} isNode={checkIfNode(`r${row}c${column}`)} />)

            }
        }
        return gridCells;
    };

    const dijkstraAlgorithm = (startNode, targetNode) => {
        const traversalOrder = [];
        const nodesToVisit = [];
        const visitedNodeCoordinates = new Set();

        nodesToVisit.push({
            coord: startNode.coord,
            path: [startNode.coord],
            edgeToNode: null,
            totalWeight: 0
        })

        while (nodesToVisit.length) {
            const currentNode = nodesToVisit.shift()
            traversalOrder.push(currentNode.coord)
            visitedNodeCoordinates.add(currentNode.coord)

            if (currentNode.coord === targetNode.coord) {
                const dijkstraPath = currentNode.path
                return [dijkstraPath, traversalOrder]
            }

            graphNodes[currentNode.coord].neighbors.forEach(neighbor => {
                traversalOrder.push(neighbor.edge)
                if (visitedNodeCoordinates.has(neighbor.coord)) return;

                const plannedToVisit = nodesToVisit.find(node => node.coord === neighbor.coord)
                if (!plannedToVisit) {
                    nodesToVisit.push({
                        coord: neighbor.coord,
                        path: [...currentNode.path, neighbor.edge, neighbor.coord],
                        edgeToNode: neighbor.edge,
                        totalWeight: currentNode.totalWeight + neighbor.weight
                    })
                } else {
                    if (plannedToVisit.totalWeight > currentNode.totalWeight + neighbor.weight) {
                        const index = nodesToVisit.indexOf(plannedToVisit);
                        nodesToVisit[index].path = [...currentNode.path, neighbor.edge, neighbor.coord]
                        nodesToVisit[index].edgeToNode = neighbor.edge
                        nodesToVisit[index].totalWeight = currentNode.totalWeight + neighbor.weight
                    }

                }
            })

            nodesToVisit.sort((a, b) => a.totalWeight - b.totalWeight)
        }
    }

    const [dijkstraPath, traversalOrder] = dijkstraAlgorithm(graphNodes.r1c1, graphNodes.r18c28)

    const playVisualization = (e) => {
        resetGraph();
        const traversalOrderCopy = traversalOrder.slice();
        const dijkstraPathCopy = dijkstraPath.slice();
        window.animateTraversalInterval = setInterval(() => {
            animateTraversal(traversalOrderCopy, dijkstraPathCopy);
            if (!traversalOrderCopy.length) {
                clearInterval(window.animateTraversalInterval);
            }
        }, e.target.value)

    }

    const animateTraversal = (traversalOrderCopy, dijkstraPathCopy) => {
        if (traversalOrderCopy.length) {
            const coordinate = traversalOrderCopy.shift()
            document.querySelector(`.${coordinate}`)?.classList.add("traversed");
        }

        if (!traversalOrderCopy.length) {
            window.animatePathInterval = setInterval(() => {
                animatePath(dijkstraPathCopy);
                if (!dijkstraPathCopy.length) {
                    clearInterval(window.animatePathInterval);
                }
            }, 100)
        }
    }

    const animatePath = (dijkstraPathCopy) => {
        if (dijkstraPathCopy.length) {
            const coordinate = dijkstraPathCopy.shift()
            document.querySelector(`.${coordinate}`)?.classList.add("path");
        }
    }

    const resetGraph = () => {
        clearInterval(window.animateTraversalInterval);
        clearInterval(window.animatePathInterval);
        traversalOrder.forEach(coordinate => {
            document.querySelector(`.${coordinate}`)?.classList.remove("traversed");
        })
        dijkstraPath.forEach(coordinate => {
            document.querySelector(`.${coordinate}`)?.classList.remove("path");
        })
    }
```

## Future Plans

* In the future, we're planning to keep adding traversal & sorting algorithms to the application until we have a highly diverse of rendered visualizations for different needs.

* We plan to write out the lessons manually and implement diagrams for users to learn more about data structures & algorithms conceptually.

# Developers

* [Ivy Huynh](https://github.com/WellHelloIvy)
* [Moiz Ahmad](https://github.com/monemad)
* [Shawn Boyle](https://github.com/ShawnBoyle7)
