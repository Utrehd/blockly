Blockly.Blocks['and'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("AND");
    this.appendValueInput("IN 1")
        .setCheck("Boolean")
        .appendField("IN 1");
    this.appendValueInput("IN 2")
        .setCheck("Boolean")
        .appendField("IN 2");
    this.setInputsInline(false);
    this.setOutput(true, "Boolean");
    this.setColour(120);
 this.setTooltip("Logic and gate");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['not'] = {
  init: function() {
    this.appendValueInput("IN 1")
        .setCheck("Boolean")
        .appendField("NOT");
    this.setOutput(true, "Boolean");
    this.setColour(330);
 this.setTooltip("Will negate the input");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['or'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("OR");
    this.appendValueInput("IN 1")
        .setCheck("Boolean")
        .appendField("IN 1");
    this.appendValueInput("IN 2")
        .setCheck("Boolean")
        .appendField("IN 2");
    this.setOutput(true, "Boolean");
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ioinput'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["I0","I0"], ["I1","I1"], ["I2","I2"], ["I4","I4"]]), "IO")
        .appendField("I/O Input");
    this.setOutput(true, "Boolean");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['iooutput'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Boolean")
        .appendField(new Blockly.FieldDropdown([["O0","O0"], ["O1","O1"], ["O2","O2"], ["O3","O3"]]), "NAME")
        .appendField("I/O Output");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
