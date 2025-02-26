import { TreeSelect as $TreeSelect } from "antd";
import { Field, FieldProps } from "formik";
import * as React from "react";
import { FormikFieldProps } from "../FieldProps";
import { TreeSelectProps as $TreeSelectProps, } from "antd/lib/tree-select";
import { TreeNodeValue } from "antd/lib/tree-select/interface";

export type TreeSelectProps<T extends TreeNodeValue = TreeNodeValue> = FormikFieldProps & $TreeSelectProps<T> & { children: React.ReactNode };

export const TreeSelect = ({ name, validate, onChange, ...restProps }: TreeSelectProps) => (
  <Field name={name} validate={validate}>
    {({ field: { value }, form }: FieldProps) => (
      <$TreeSelect
        value={value}
        onBlur={() => form.setFieldTouched(name)}
        onChange={(value, node, extra) => {
          form.setFieldValue(name, value);
          onChange && onChange(value, node, extra)
        }}
        {...restProps}
      />
    )}
  </Field>
);

export default TreeSelect

TreeSelect.TreeNode = $TreeSelect.TreeNode;
