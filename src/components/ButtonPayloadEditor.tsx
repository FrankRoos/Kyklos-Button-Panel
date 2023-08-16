import React, { useState } from 'react';
import { StandardEditorProps } from '@grafana/data';
import { Field, TextArea } from '@grafana/ui';

import { ButtonPanelOptions, EditorCodeType } from 'types';

interface Props extends StandardEditorProps<EditorCodeType, ButtonPanelOptions> {}

export const ButtonPayloadEditor: React.FC<Props> = ({ item, value, onChange, context }) => {
  const [newParamValue, setNewParamValue] = useState('');

  const onNewParamValueChanged = (value: string) => {
    setNewParamValue(value);
    onChange(value);
  };

  return (
    <div className="panel-container" style={{ width: 'auto' }}>
      <Field>
        <TextArea
          value={newParamValue}
          placeholder="{ query: 'your query' }"
          rows={5}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => onNewParamValueChanged(e.target.value)}
        />
      </Field>
    </div>
  );
};
