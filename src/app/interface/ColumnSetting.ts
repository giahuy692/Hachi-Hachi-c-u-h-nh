export class ColumnSetting {
  field: string = '';
  title: string = '';
  format?: string;
  type?: 'text' | 'numeric' | 'boolean' | 'date';
}
