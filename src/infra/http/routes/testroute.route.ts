import express from 'express'
import _ from 'lodash'

const testRouter = express.Router()

type Task = {
  username: string
  title: string
  dueDate: string
  complete: boolean
  effort: string
  priority: 'low' | 'medium' | 'hight'
}

testRouter.get('/', (req, res) => {
  const tasks = [
    {
      username: 'Scott',
      title: 'Complete build system',
      dueDate: '2014-06-09',
      complete: true,
      effort: 'low',
      priority: 'medium'
    },
    {
      username: 'SPault',
      title: 'Complete build system',
      dueDate: '2014-06-09',
      complete: true,
      effort: 'low',
      priority: 'medium'
    },
    {
      username: 'Peter',
      title: 'Determine versioning scheme',
      dueDate: '2014-06-09',
      complete: false,
      effort: 'low',
      priority: 'medium'
    },
    {
      username: 'Paul',
      title: 'Complete Refactoring scheme',
      dueDate: '2015-06-09',
      complete: true,
      effort: 'low',
      priority: 'hight'
    },
    {
      username: 'Paula',
      title: 'Update last conditional',
      dueDate: '2015-07-09',
      complete: false,
      effort: 'low',
      priority: 'medium'
    }
  ]

  const users = [
    { name: 'john', age: 20, gender: 'm' },
    { name: 'jonathan', age: 30, gender: 'm' },
    { name: 'marry', age: 22, gender: 'f' },
    { name: 'samara', age: 24, gender: 'f' },
    { name: 'paula', age: 24, gender: 'f' },
    { name: 'bill', age: 39, gender: 'm' }
  ]

  const TasksNameLikeAndComplete = (task: Task) => {
    return task.username.match(/^P.*$/) && task.priority === 'medium'
  }

  const incompleteTasks = _.filter(tasks, {
    complete: true
    // priority: 'medium'
  })

  const incompleteTasksAndName = _.filter(tasks, TasksNameLikeAndComplete)

  const filterUsersAgeLessThan40 = _.filter(users, user => {
    return user.age < 40
  })

  const filterUsersNameLike = _.filter(users, user => {
    return user.name.match(/^.*jo.*$/)
  })

  const sortByUsersNameAndAge = _.orderBy(
    users,
    ['age', 'name'],
    ['desc', 'asc']
  )

  const returns = [
    {
      incomplete: incompleteTasks,
      incompleteAndName: incompleteTasksAndName,
      filterUsersAge: filterUsersAgeLessThan40,
      filterUsersName: filterUsersNameLike,
      sortbyUserAndAge: sortByUsersNameAndAge
    }
  ]

  res.json(returns)
})

export { testRouter }
