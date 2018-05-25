Blockly.JavaScript['and'] = function(block) {
  var value_in_1 = Blockly.JavaScript.valueToCode(block, 'IN 1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_in_2 = Blockly.JavaScript.valueToCode(block, 'IN 2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['not'] = function(block) {
  var value_in_1 = Blockly.JavaScript.valueToCode(block, 'IN 1', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['or'] = function(block) {
  var value_in_1 = Blockly.JavaScript.valueToCode(block, 'IN 1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_in_2 = Blockly.JavaScript.valueToCode(block, 'IN 2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['ioinput'] = function(block) {
  var dropdown_io = block.getFieldValue('IO');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['iooutput'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};