module.exports = function (plop) {
  plop.setGenerator('Component', {
    description: 'React Component',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Component name please?'
    }],
    actions: [{
      type: 'add',
      path: '../src/components/{{pascalCase name}}/index.tsx',
      templateFile: 'templates/index.tsx.hbs'
    }, {
      type: 'add',
      path: '../src/components/{{pascalCase name}}/styles.ts',
      templateFile: 'templates/styles.ts'
    }]
  });

  plop.setGenerator('Page', {
    description: 'React Page',
    prompts: [ {
      type: 'input',
      name: 'name',
      message: 'Page name please?'
    }],
    actions: [{
      type: 'add',
      path: '../src/pages/{{pascalCase name}}/index.tsx',
      templateFile: 'templates/index.tsx.hbs'
    }, {
      type: 'add',
      path: '../src/pages/{{pascalCase name}}/styles.ts',
      templateFile: 'templates/styles.ts'
    }]
  });

  plop.setGenerator('Crud', {
    description: 'React Crud',
    prompts: [ {
      type: 'input',
      name: 'name',
      message: 'PageCrud name please?'
    }],
    actions: [{
      type: 'add',
      path: '../src/pages/{{pascalCase name}}/index.tsx',
      templateFile: 'templates/crud.tsx.hbs'
    }, {
      type: 'add',
      path: '../src/pages/{{pascalCase name}}/styles.ts',
      templateFile: 'templates/styles.ts'
    }]
  });
};