const User = require("../models/user.model");

exports.registerNewUser = async (req, res) => {
  try {
     const isUser = await User.find({ email: req.body.email });
    console.log(isUser);
    if (isUser.length >= 1) {
      return res
        .status(409)
        .json({ message: "Atenção! Este e-mail já possui registro!" });
    }
    const newUser = new User(req.body);
    const user = await newUser.save();
    const token = await newUser.generateAuthToken(); // ==> Aqui chamaremos o método que criamos no model
    return res
      .status(201)
      .json({ message: "Usuário(a) criado(a) com sucesso!", user, token });
  } catch (err) {
    return res.status(400).json({ err });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email } = req.body;
    const { password } = req.body;
    const user = await User.findByCredentials(email, password);
    if (!user) {
      return res.status(401).json({
        error: "Erro ao Logar! Verifique as suas credenciais de autenticação!",
      });
    }
    const token = await user.generateAuthToken();
    return res
      .status(201)
      .json({ message: "Usuário(a) logado com sucesso!", user, token });
  } catch (err) {
    return res.status(400).json({ err });
  }
};

exports.returnUserProfile = async (req, res) => {
  await res.json(req.userData);
};

exports.returnUser = async (req, res) => {
  try {
    const user = await User.find()
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ erro: error })
  }
}; 

exports.updateUser = async (req, res) => {
  const id = req.params.id
  const { name, telefone, email, apto, inadimplente } = req.body
  const user = {
    name,
    telefone, 
    email, 
    apto,
    inadimplente,
  }
  try {
    const updateUser = await User.updateOne({ _id: id }, user)
    if (updateUser.matchedCount === 0) {
      res.status(422).json({ message: 'Agendamento não encontrado!' })
      return
    }
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ erro: error })
  }
};

exports.deleteUser = async (req, res) => {
  const id = req.params.id
  const user = await User.findOne({ _id: id })
  if (!user) {
    res.status(422).json({ message: 'Usuário não encontrado!' })
    return
  }
  try {
    await User.deleteOne({ _id: id })

    res.status(200).json({ message: 'Usuário removido com sucesso!' })
  } catch (error) {
    res.status(500).json({ erro: error })
  }
};