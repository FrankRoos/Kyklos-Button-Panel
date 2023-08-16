import React, { useState } from 'react';
import { StandardEditorProps } from '@grafana/data';
import { Field, TextArea } from '@grafana/ui';

import { ButtonPanelOptions, EditorCodeType} from 'types';

interface Props extends StandardEditorProps<EditorCodeType, ButtonPanelOptions> {}

export const ButtonPayloadEditor: React.FC<Props> = ({ item, value, onChange, context }) => {
  const [newPayload, setNewPayload] = useState('');

  const onNewPayloadChanged = (value: string) => {
    setNewPayload(value);
    onChange(value);
  };

  return (
    <div className="panel-container" style={{ width: 'auto' }}>
      <Field>
        <TextArea
          value={newPayload}
          placeholder="{ 'key': 'value' }"
          rows={5}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => onNewPayloadChanged(e.target.value)}
        />
      </Field>
    </div>
  );
};
