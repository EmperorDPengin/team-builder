import { v4 as uuid } from 'uuid'

const initialTeamList = [
    
]

export default {
    get() {
        return Promise.resolve({ status:200, success:true, data:initialTeamList })
    },
    post(url, { name, email, role }) {
        const newTeamMember = { id: uuid(), name, email, role }
        return Promise.resolve({ status: 200, success: true, data: newTeamMember })
    }
}