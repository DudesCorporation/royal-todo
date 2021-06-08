import { reactive, SetupContext } from 'vue';

export enum OptionsInputType {
  Text = 'text',
  Checkbox = 'checkbox',
  Color = 'color',
  Select = 'select',
  Button = 'button',
}

export function columnOptionsMenuItems(this: SetupContext) {
  return reactive([
    {
      name: 'Title',
      inputType: OptionsInputType.Text,
      handlers: {},
    },
    {
      name: 'Type',
      inputType: OptionsInputType.Select,
      options: ['plain', 'secure', 'checkbox', 'code', 'rich', 'date', 'time', 'file'],
      handlers: {},
    },
    {
      name: 'Width',
      inputType: '',
      handlers: {},
    },
    {
      name: 'Static/Resizable',
      inputType: OptionsInputType.Checkbox,
      handlers: {},
    },
    {
      name: 'Color',
      inputType: OptionsInputType.Color,
      handlers: {},
    },
    {
      name: 'Default value',
      inputType: OptionsInputType.Text,
      handlers: {},
    },
    {
      name: 'Delete',
      inputType: OptionsInputType.Button,
      handlers: {
        click: () => {
          this.emit('delete-column');
        },
      },
    },
  ]);
}
