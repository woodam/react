var React = require('react');
var Todo = require('Todo')

var TodoList = React.createClass({
   render : function(){
       var {todos} = this.props;
       var renderTodos = () =>{
           return todos.map((todo, i)=> {
               return (
                   <Todo key={i} {...todo}/>
               )
           });
       };

       return(
            <div>
                {renderTodos()}
            </div>
       )
   }
});

module.exports = TodoList;