/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const { notEmpty } = require('../utils')

module.exports = {
  description: 'generate page',
  prompts: [
    {
      type: 'input',
      name: 'folder',
      message: 'page folder please',
      validate: notEmpty('folder')
    },
    {
      type: 'input',
      name: 'name',
      message: 'page name please',
      validate: notEmpty('name')
    },
    {
      type: 'checkbox',
      name: 'blocks',
      message: 'Blocks:',
      choices: [
        {
          name: '<template>',
          value: 'template',
          checked: true
        },
        {
          name: '<script>',
          value: 'script',
          checked: true
        },
        {
          name: 'style',
          value: 'style',
          checked: true
        }
      ],
      validate(value) {
        if (
          value.indexOf('script') === -1 &&
          value.indexOf('template') === -1
        ) {
          return 'page require at least a script or template tag.'
        }
        return true
      }
    }
  ],
  actions: (data) => {
    const name = '{{properCase name}}'
    return [
      {
        type: 'add',
        path: `src/views/${data.folder}/${name}.vue`,
        templateFile: 'templates/components/index.hbs',
        data: {
          name: name,
          template: data.blocks.includes('template'),
          script: data.blocks.includes('script'),
          style: data.blocks.includes('style')
        }
      }
    ]
  }
}
