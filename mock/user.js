
const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://5b0988e595225.cdn.sohucs.com/images/20171210/785a41bb2f564e279dfb1a6b7e038f51.gif',
    name: 'Super Admin'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}

export default [
  // user login
  {
    url: '/auth/oauth/token',
    type: 'get',
    response: config => {
      const { username } = config.body
      const token = tokens[username]

      return {
        access_token: token,
        refresh_token: token,
        token_type: 1,
        expires_in: '',
        scope: '',
        license: '',
        dept_id: '',
        user_id: '',
        username: ''
      }
    }
  },

  // get user info
  {
    url: '/mock/user/info\.*',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = users[token]

      // mock error
      if (!info) {
        return {
          code: 50008,
          message: 'Login failed, unable to get user details.'
        }
      }

      return {
        code: 20000,
        data: info
      }
    }
  },

  // user logout
  {
    url: '/mock/auth/oauth/logout',
    type: 'delete',
    response: _ => {
      return {
        code: 1,
        data: 'success'
      }
    }
  }
]
