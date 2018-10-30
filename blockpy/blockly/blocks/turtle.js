/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Text blocks for Blockly.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.turtle');

goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.turtle.HUE = 270;

Blockly.Blocks['turtle_create'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("create new turtle");
        this.setOutput(true, 'Turtle');
        this.setColour(180);
        this.setTooltip('Creates a new turtle');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['turtle_shape'] = {
    init: function() {
        var OPERATORS =
            [['turtle', 'TURTLE'],
                ['classic', 'CLASSIC'],
                ['circle', 'CIRCLE']];
        this.appendValueInput("TURTLE")
            .setCheck("Turtle")
            .appendField("make turtle");
        this.appendDummyInput()
            .appendField("shape");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown(OPERATORS), 'OP');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setOutput(false);
        this.setInputsInline(true);
        this.setColour(180);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['turtle_color'] = {
    init: function() {
        this.appendValueInput("TURTLE")
            .setCheck("Turtle")
            .appendField("make turtle");
        this.appendValueInput("COLOR")
            .setCheck(null)
            .appendField("color");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setOutput(false);
        this.setInputsInline(true);
        this.setColour(180);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['turtle_forward'] = {
    init: function() {
        this.appendValueInput("TURTLE")
            .setCheck("Turtle")
            .appendField("make turtle");
        this.appendValueInput("DISTANCE")
            .setCheck(null)
            .appendField("move forward by");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.setOutput(false);
        this.setColour(180);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['turtle_backward'] = {
    init: function() {
        this.appendValueInput("TURTLE")
            .setCheck("Turtle")
            .appendField("make turtle");
        this.appendValueInput("DISTANCE")
            .setCheck(null)
            .appendField("move backward by");
        this.setPreviousStatement(true);
        this.setInputsInline(true);
        this.setNextStatement(true);
        this.setOutput(false);
        this.setColour(180);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['turtle_left'] = {
    init: function() {
        this.appendValueInput("TURTLE")
            .setCheck("Turtle")
            .appendField("make turtle");
        this.appendValueInput("ANGLE")
            .setCheck(null)
            .appendField("turn left by");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.setOutput(false);
        this.setColour(180);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['turtle_right'] = {
    init: function() {
        this.appendValueInput("TURTLE")
            .setCheck("Turtle")
            .appendField("make turtle");
        this.appendValueInput("ANGLE")
            .setCheck(null)
            .appendField("turn right by");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.setOutput(false);
        this.setColour(180);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['text_count'] = {
    init: function() {
        this.appendValueInput("HAYSTACK")
            .setCheck(null)
            .appendField("in");
        this.appendValueInput("NEEDLE")
            .setCheck(null)
            .appendField("count # of");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};
