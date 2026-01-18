import { WORK_DIR } from '~/utils/constants';

export interface ProjectFileTemplate {
  path: string;
  content: string;
}

export interface ProjectTemplate {
  id: string;
  name: string;
  files: ProjectFileTemplate[];
}

export const defaultProjectTemplate: ProjectTemplate = {
  id: 'default',
  name: 'Default Piepio Project',
  files: [
    {
      path: `${WORK_DIR}/README.md`,
      content: [
        '# Piepio project',
        '',
        'This is a starter project managed inside Piepio.',
        '',
        'You can edit files in the Workbench and run commands in the terminal.',
      ].join('\n'),
    },
    {
      path: `${WORK_DIR}/package.json`,
      content: JSON.stringify(
        {
          name: 'piepio-project',
          version: '0.1.0',
          private: true,
          scripts: {
            dev: 'node src/index.js',
            build: 'echo "Add your build step here"',
            start: 'node src/index.js',
          },
        },
        null,
        2,
      ),
    },
    {
      path: `${WORK_DIR}/src/index.ts`,
      content: ["export function main() {", "  console.log('Hello from Piepio');", '}', '', 'main();', ''].join('\n'),
    },
  ],
};

