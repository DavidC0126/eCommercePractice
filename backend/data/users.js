import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true
    },
    {
        name: 'Janet Chen',
        email: 'yiching@example.com',
        password: bcrypt.hashSync('123456',10),
    },
    {
        name: 'David Chuang',
        email: 'cchuang@example.com',
        password: bcrypt.hashSync('123456',10),
    }
]

export default users