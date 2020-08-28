const login = async (req, res) => {
    try {
        res.render('auth/loginView', { title: 'Login' })
    } catch (error) {
        res.send('Erorr get view')
    }
}

const signup = async (req, res) => {
    try {
        res.render('auth/signUpView', { title: 'SignUp' })
    } catch (error) {
        res.send('error get signup view' + error)
    }
}

const doLogin = async (req, res) => {

}

module.exports = {
    login, doLogin, signup
}