const aEstrela = () => {

}

export default aEstrela;

// """ Accept Start and Goal Puzzle state"""
// print("Enter the start state matrix \n")
// start = self.accept()
// print("Enter the goal state matrix \n")        
// goal = self.accept()

// start = Node(start,0,0)
// start.fval = self.f(start,goal)
// """ Put the start node in the open list"""
// self.open.append(start)
// print("\n\n")
// while True:
//     cur = self.open[0]
//     print("")
//     print("  | ")
//     print("  | ")
//     print(" \\\'/ \n")
//     for i in cur.data:
//         for j in i:
//             print(j,end=" ")
//         print("")
//     """ If the difference between current and goal node is 0 we have reached the goal node"""
//     if(self.h(cur.data,goal) == 0):
//         break
//     for i in cur.generate_child():
//         i.fval = self.f(i,goal)
//         self.open.append(i)
//     self.closed.append(cur)
//     del self.open[0]

//     """ sort the opne list based on f value """
//     self.open.sort(key = lambda x:x.fval,reverse=False)