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

goog.provide('Blockly.Python.turtle');

goog.require('Blockly.Python');

Blockly.Python['turtle_create'] = function(block) {
    Blockly.Python.definitions_['import_turtle'] = 'import turtle';
    var code = 'turtle.Turtle()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['turtle_color'] = function(block) {
    var turtle = Blockly.Python.valueToCode(block, 'TURTLE', Blockly.Python.ORDER_ATOMIC);
    var color = Blockly.Python.valueToCode(block, 'COLOR', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = turtle+'.color('+color+')\n';
    return code;
};

Blockly.Python['turtle_shape'] = function(block) {
    var OPERATORS = {
        'TURTLE': 'turtle',
        'CLASSIC': 'classic',
        'CIRCLE': 'circle'
    };
    var operator = OPERATORS[block.getFieldValue('OP')];
    var turtle = Blockly.Python.valueToCode(block, 'TURTLE', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = turtle+'.shape('+ "\"" + operator + "\"" + ')\n';
    return code;
};

Blockly.Python['turtle_forward'] = function(block) {
    var turtle = Blockly.Python.valueToCode(block, 'TURTLE', Blockly.Python.ORDER_ATOMIC);
    var distance = Blockly.Python.valueToCode(block, 'DISTANCE', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = turtle+'.forward('+distance+')\n';
    return code;
};


Blockly.Python['turtle_backward'] = function(block) {
    var turtle = Blockly.Python.valueToCode(block, 'TURTLE', Blockly.Python.ORDER_ATOMIC);
    var distance = Blockly.Python.valueToCode(block, 'DISTANCE', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = turtle+'.backward('+distance+')\n';
    return code;
};


Blockly.Python['turtle_left'] = function(block) {
    var turtle = Blockly.Python.valueToCode(block, 'TURTLE', Blockly.Python.ORDER_ATOMIC);
    var angle = Blockly.Python.valueToCode(block, 'ANGLE', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = turtle+'.left('+angle+')\n';
    return code;
};


Blockly.Python['turtle_right'] = function(block) {
    var turtle = Blockly.Python.valueToCode(block, 'TURTLE', Blockly.Python.ORDER_ATOMIC);
    var angle = Blockly.Python.valueToCode(block, 'ANGLE', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = turtle+'.right('+angle+')\n';
    return code;
};


Blockly.Python['text_count'] = function(block) {
    var value_haystack = Blockly.Python.valueToCode(block, 'HAYSTACK', Blockly.Python.ORDER_ATOMIC) || '___';
    var value_needle = Blockly.Python.valueToCode(block, 'NEEDLE', Blockly.Python.ORDER_ATOMIC) || '___';
    var code = value_haystack + '.count(' + value_needle + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};

