import UserModel from '../Model/UserModel.js'

export const login = (req, res) => {
  res.send('Auth page')
}

export const register = async (req, res) => {
  const newUser = new UserModel(req.body)
  const { username } = req.body
  try {
    const oldUser = await UserModel.findOne({ username })
    if (oldUser) {
      res.status(400).json('user already')
    } else {
      await newUser.save()
      res.status(200).json(newUser)
    }
  } catch (error) {
    console.log(error)
  }
}
