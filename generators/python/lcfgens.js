'use strict';

goog.provide('Blockly.Python.lcfgens');

goog.require('Blockly.Python');



Blockly.Python['and'] = function(block) {
  var value_in_1 = Blockly.Python.valueToCode(block, 'IN 1', Blockly.Python.ORDER_ATOMIC);
  var value_in_2 = Blockly.Python.valueToCode(block, 'IN 2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_in_1 + ' and ' + value_in_2;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['not'] = function(block) {
  var value_in_1 = Blockly.Python.valueToCode(block, 'IN 1', Blockly.Python.ORDER_LOGICAL_NOT);
  // TODO: Assemble Python into code variable.
  var code = 'not ' + value_in_1;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_LOGICAL_NOT];
};

Blockly.Python['or'] = function(block) {
  var value_in_1 = Blockly.Python.valueToCode(block, 'IN 1', Blockly.Python.ORDER_ATOMIC);
  var value_in_2 = Blockly.Python.valueToCode(block, 'IN 2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_in_1 + ' or ' + value_in_2;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['ioinput'] = function(block) {
  var dropdown_io = block.getFieldValue('IO');
  // TODO: Assemble Python into code variable.
  var code = dropdown_io;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['iooutput'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name + ' = ' +  dropdown_name + ' \n';
  return code;
};
