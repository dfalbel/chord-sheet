(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ChordSheetJS = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var $988mA$lodashget = require("lodash.get");

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $882b6d93070905b3$export$2e2bcd8739ae039);
$parcel$export(module.exports, "ChordProParser", () => $4f0048d666582440$export$2e2bcd8739ae039);
$parcel$export(module.exports, "ChordSheetParser", () => $c049675f48c823b2$export$2e2bcd8739ae039);
$parcel$export(module.exports, "UltimateGuitarParser", () => $db9c80925e255cd2$export$2e2bcd8739ae039);
$parcel$export(module.exports, "TextFormatter", () => $525b2331e4b0ed83$export$2e2bcd8739ae039);
$parcel$export(module.exports, "HtmlTableFormatter", () => $5b02ea769c63fd56$export$2e2bcd8739ae039);
$parcel$export(module.exports, "HtmlDivFormatter", () => $ee0c149cc33dc156$export$2e2bcd8739ae039);
$parcel$export(module.exports, "ChordProFormatter", () => $b601b9602157ea5f$export$2e2bcd8739ae039);
$parcel$export(module.exports, "ChordLyricsPair", () => $d454f4215ba01af2$export$2e2bcd8739ae039);
$parcel$export(module.exports, "Line", () => $bc411321e9739719$export$2e2bcd8739ae039);
$parcel$export(module.exports, "Song", () => $6f653df65dfdf4ef$export$2e2bcd8739ae039);
$parcel$export(module.exports, "Tag", () => $5e9ede69210ec54a$export$2e2bcd8739ae039);
$parcel$export(module.exports, "Comment", () => $2115988b22311cb1$export$2e2bcd8739ae039);
$parcel$export(module.exports, "Metadata", () => $1406c61233580008$export$2e2bcd8739ae039);
$parcel$export(module.exports, "Paragraph", () => $0c3420c6a3e8a9d7$export$2e2bcd8739ae039);
$parcel$export(module.exports, "Ternary", () => $b6d84b168638423d$export$2e2bcd8739ae039);
$parcel$export(module.exports, "Composite", () => $812df3771838671d$export$2e2bcd8739ae039);
$parcel$export(module.exports, "Literal", () => $e1378a714a1834c5$export$2e2bcd8739ae039);
$parcel$export(module.exports, "ChordSheetSerializer", () => $1c14afc274b727b7$export$2e2bcd8739ae039);
$parcel$export(module.exports, "Chord", () => $26f57998457eb2d4$export$2e2bcd8739ae039);
$parcel$export(module.exports, "parseChord", () => $26f57998457eb2d4$export$621b8187b24d90c6);
$parcel$export(module.exports, "Key", () => $bff5407e03fdc8ee$export$2e2bcd8739ae039);
$parcel$export(module.exports, "CHORUS", () => $af8d31735c159a26$export$8db6c706fc9142b2);
$parcel$export(module.exports, "INDETERMINATE", () => $af8d31735c159a26$export$c5a6fe907430212e);
$parcel$export(module.exports, "VERSE", () => $af8d31735c159a26$export$4b194284baed1659);
$parcel$export(module.exports, "NONE", () => $af8d31735c159a26$export$c53d0f541b41b88e);
$parcel$export(module.exports, "TAB", () => $af8d31735c159a26$export$f1c9dd0f5207dd5e);
$parcel$export(module.exports, "SYMBOL", () => $af8d31735c159a26$export$27c95a7104c1f7aa);
$parcel$export(module.exports, "NUMERIC", () => $af8d31735c159a26$export$4d318981b5a83836);
function $1a506a341538d943$var$peg$padEnd(str, targetLength, padString) {
    padString = padString || " ";
    if (str.length > targetLength) return str;
    targetLength -= str.length;
    padString += padString.repeat(targetLength);
    return str + padString.slice(0, targetLength);
}
class $1a506a341538d943$export$f21cea08b0dd60e8 extends Error {
    static buildMessage(expected, found) {
        function hex(ch) {
            return ch.charCodeAt(0).toString(16).toUpperCase();
        }
        function literalEscape(s) {
            return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, (ch)=>"\\x0" + hex(ch)).replace(/[\x10-\x1F\x7F-\x9F]/g, (ch)=>"\\x" + hex(ch));
        }
        function classEscape(s) {
            return s.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, (ch)=>"\\x0" + hex(ch)).replace(/[\x10-\x1F\x7F-\x9F]/g, (ch)=>"\\x" + hex(ch));
        }
        function describeExpectation(expectation) {
            switch(expectation.type){
                case "literal":
                    return '"' + literalEscape(expectation.text) + '"';
                case "class":
                    const escapedParts = expectation.parts.map((part)=>{
                        return Array.isArray(part) ? classEscape(part[0]) + "-" + classEscape(part[1]) : classEscape(part);
                    });
                    return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
                case "any":
                    return "any character";
                case "end":
                    return "end of input";
                case "other":
                    return expectation.description;
            }
        }
        function describeExpected(expected1) {
            const descriptions = expected1.map(describeExpectation);
            let i;
            let j;
            descriptions.sort();
            if (descriptions.length > 0) {
                for(i = 1, j = 1; i < descriptions.length; i++)if (descriptions[i - 1] !== descriptions[i]) {
                    descriptions[j] = descriptions[i];
                    j++;
                }
                descriptions.length = j;
            }
            switch(descriptions.length){
                case 1:
                    return descriptions[0];
                case 2:
                    return descriptions[0] + " or " + descriptions[1];
                default:
                    return descriptions.slice(0, -1).join(", ") + ", or " + descriptions[descriptions.length - 1];
            }
        }
        function describeFound(found1) {
            return found1 ? '"' + literalEscape(found1) + '"' : "end of input";
        }
        return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
    }
    constructor(message, expected, found, location){
        super();
        this.message = message;
        this.expected = expected;
        this.found = found;
        this.location = location;
        this.name = "SyntaxError";
        if (typeof Object.setPrototypeOf === "function") Object.setPrototypeOf(this, $1a506a341538d943$export$f21cea08b0dd60e8.prototype);
        else this.__proto__ = $1a506a341538d943$export$f21cea08b0dd60e8.prototype;
        if (typeof Error.captureStackTrace === "function") Error.captureStackTrace(this, $1a506a341538d943$export$f21cea08b0dd60e8);
    }
    format(sources) {
        let str = "Error: " + this.message;
        if (this.location) {
            let src = null;
            let k;
            for(k = 0; k < sources.length; k++)if (sources[k].source === this.location.source) {
                src = sources[k].text.split(/\r\n|\n|\r/g);
                break;
            }
            let s = this.location.start;
            let loc = this.location.source + ":" + s.line + ":" + s.column;
            if (src) {
                let e = this.location.end;
                let filler = $1a506a341538d943$var$peg$padEnd("", s.line.toString().length, " ");
                let line = src[s.line - 1];
                let last = s.line === e.line ? e.column : line.length + 1;
                str += "\n --> " + loc + "\n" + filler + " |\n" + s.line + " | " + line + "\n" + filler + " | " + $1a506a341538d943$var$peg$padEnd("", s.column - 1, " ") + $1a506a341538d943$var$peg$padEnd("", last - s.column, "^");
            } else str += "\n at " + loc;
        }
        return str;
    }
}
function $1a506a341538d943$var$peg$parse(input, options) {
    options = options !== undefined ? options : {};
    const peg$FAILED = {};
    const peg$source = options.grammarSource;
    const peg$startRuleFunctions = {};
    let peg$startRuleFunction = peg$parseChordSheet;
    const peg$c0 = function(lines, line) {
        return {
            type: "chordSheet",
            lines: [
                ...lines,
                line
            ]
        };
    };
    const peg$c1 = function(line) {
        return line;
    };
    const peg$c2 = function(lyrics, tokens, chords, comment) {
        return {
            type: "line",
            items: [
                lyrics ? {
                    type: "chordLyricsPair",
                    chords: "",
                    lyrics: lyrics
                } : null,
                ...tokens,
                chords ? {
                    type: "chordLyricsPair",
                    chords: chords,
                    lyrics: ""
                } : null,
                comment ? {
                    type: "comment",
                    comment: comment
                } : null
            ].filter((x)=>x)
        };
    };
    const peg$c3 = "#";
    const peg$c4 = peg$literalExpectation("#", false);
    const peg$c5 = /^[^\r\n]/;
    const peg$c6 = peg$classExpectation([
        "\r",
        "\n"
    ], true, false);
    const peg$c7 = function(comment) {
        return comment;
    };
    const peg$c8 = function(chords, lyrics) {
        return {
            type: "chordLyricsPair",
            chords: chords || "",
            lyrics: lyrics
        };
    };
    const peg$c9 = function(lyrics) {
        return lyrics.map((c)=>c.char || c).join("");
    };
    const peg$c10 = "[";
    const peg$c11 = peg$literalExpectation("[", false);
    const peg$c12 = "]";
    const peg$c13 = peg$literalExpectation("]", false);
    const peg$c14 = function(chords) {
        return chords.map((c)=>c.char || c).join("");
    };
    const peg$c15 = /^[^\]\r\n]/;
    const peg$c16 = peg$classExpectation([
        "]",
        "\r",
        "\n"
    ], true, false);
    const peg$c17 = "\\";
    const peg$c18 = peg$literalExpectation("\\", false);
    const peg$c19 = function() {
        return {
            type: "char",
            char: "\\"
        };
    };
    const peg$c20 = function() {
        return {
            type: "char",
            char: "]"
        };
    };
    const peg$c21 = function(sequence) {
        return sequence;
    };
    const peg$c22 = "%{";
    const peg$c23 = peg$literalExpectation("%{", false);
    const peg$c24 = "}";
    const peg$c25 = peg$literalExpectation("}", false);
    const peg$c26 = function(variableName, valueTest, expressions) {
        return {
            "type": "ternary",
            variable: variableName.length > 0 ? variableName : null,
            valueTest: valueTest,
            ...expressions,
            location: location().start
        };
    };
    const peg$c27 = "=";
    const peg$c28 = peg$literalExpectation("=", false);
    const peg$c29 = function(testValue) {
        return testValue;
    };
    const peg$c30 = "|";
    const peg$c31 = peg$literalExpectation("|", false);
    const peg$c32 = function(trueExpression, falseExpression) {
        return {
            "type": "ternary",
            trueExpression: trueExpression,
            falseExpression: falseExpression,
            location: location().start
        };
    };
    const peg$c33 = function(falseExpression) {
        return falseExpression;
    };
    const peg$c34 = /^[a-zA-Z0-9\-_]/;
    const peg$c35 = peg$classExpectation([
        [
            "a",
            "z"
        ],
        [
            "A",
            "Z"
        ],
        [
            "0",
            "9"
        ],
        "-",
        "_"
    ], false, false);
    const peg$c36 = function() {
        return {
            type: "char",
            char: "|"
        };
    };
    const peg$c37 = function() {
        return {
            type: "char",
            char: "}"
        };
    };
    const peg$c38 = /^[^|[\]\\{}%#\r\n]/;
    const peg$c39 = peg$classExpectation([
        "|",
        "[",
        "]",
        "\\",
        "{",
        "}",
        "%",
        "#",
        "\r",
        "\n"
    ], true, false);
    const peg$c40 = function() {
        return {
            type: "char",
            char: "["
        };
    };
    const peg$c41 = "{";
    const peg$c42 = peg$literalExpectation("{", false);
    const peg$c43 = function() {
        return {
            type: "char",
            char: "{"
        };
    };
    const peg$c44 = "%";
    const peg$c45 = peg$literalExpectation("%", false);
    const peg$c46 = function() {
        return {
            type: "char",
            char: "%"
        };
    };
    const peg$c47 = function() {
        return {
            type: "char",
            char: "#"
        };
    };
    const peg$c48 = function(tagName, tagColonWithValue) {
        return {
            type: "tag",
            name: tagName,
            value: tagColonWithValue,
            location: location().start
        };
    };
    const peg$c49 = ":";
    const peg$c50 = peg$literalExpectation(":", false);
    const peg$c51 = function(tagValue) {
        return tagValue.map((c)=>c.char || c).join("");
    };
    const peg$c52 = /^[a-zA-Z\-_]/;
    const peg$c53 = peg$classExpectation([
        [
            "a",
            "z"
        ],
        [
            "A",
            "Z"
        ],
        "-",
        "_"
    ], false, false);
    const peg$c54 = /^[^}\\\r\n]/;
    const peg$c55 = peg$classExpectation([
        "}",
        "\\",
        "\r",
        "\n"
    ], true, false);
    const peg$c56 = peg$otherExpectation("whitespace");
    const peg$c57 = /^[ \t\n\r]/;
    const peg$c58 = peg$classExpectation([
        " ",
        "	",
        "\n",
        "\r"
    ], false, false);
    const peg$c59 = peg$otherExpectation("space");
    const peg$c60 = /^[ \t]/;
    const peg$c61 = peg$classExpectation([
        " ",
        "	"
    ], false, false);
    const peg$c62 = "\n";
    const peg$c63 = peg$literalExpectation("\n", false);
    const peg$c64 = "\r";
    const peg$c65 = peg$literalExpectation("\r", false);
    let peg$currPos = 0;
    let peg$savedPos = 0;
    const peg$posDetailsCache = [
        {
            line: 1,
            column: 1
        }
    ];
    let peg$maxFailPos = 0;
    let peg$maxFailExpected = [];
    let peg$silentFails = 0;
    let peg$result;
    if (options.startRule !== undefined) {
        if (!(options.startRule in peg$startRuleFunctions)) throw new Error("Can't start parsing from rule \"" + options.startRule + '".');
        peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
    }
    function text() {
        return input.substring(peg$savedPos, peg$currPos);
    }
    function location() {
        return peg$computeLocation(peg$savedPos, peg$currPos);
    }
    function expected(description, location1) {
        location1 = location1 !== undefined ? location1 : peg$computeLocation(peg$savedPos, peg$currPos);
        throw peg$buildStructuredError([
            peg$otherExpectation(description)
        ], input.substring(peg$savedPos, peg$currPos), location1);
    }
    function error(message, location1) {
        location1 = location1 !== undefined ? location1 : peg$computeLocation(peg$savedPos, peg$currPos);
        throw peg$buildSimpleError(message, location1);
    }
    function peg$literalExpectation(text1, ignoreCase) {
        return {
            type: "literal",
            text: text1,
            ignoreCase: ignoreCase
        };
    }
    function peg$classExpectation(parts, inverted, ignoreCase) {
        return {
            type: "class",
            parts: parts,
            inverted: inverted,
            ignoreCase: ignoreCase
        };
    }
    function peg$anyExpectation() {
        return {
            type: "any"
        };
    }
    function peg$endExpectation() {
        return {
            type: "end"
        };
    }
    function peg$otherExpectation(description) {
        return {
            type: "other",
            description: description
        };
    }
    function peg$computePosDetails(pos) {
        let details = peg$posDetailsCache[pos];
        let p;
        if (details) return details;
        else {
            p = pos - 1;
            while(!peg$posDetailsCache[p])p--;
            details = peg$posDetailsCache[p];
            details = {
                line: details.line,
                column: details.column
            };
            while(p < pos){
                if (input.charCodeAt(p) === 10) {
                    details.line++;
                    details.column = 1;
                } else details.column++;
                p++;
            }
            peg$posDetailsCache[pos] = details;
            return details;
        }
    }
    function peg$computeLocation(startPos, endPos) {
        const startPosDetails = peg$computePosDetails(startPos);
        const endPosDetails = peg$computePosDetails(endPos);
        return {
            source: peg$source,
            start: {
                offset: startPos,
                line: startPosDetails.line,
                column: startPosDetails.column
            },
            end: {
                offset: endPos,
                line: endPosDetails.line,
                column: endPosDetails.column
            }
        };
    }
    function peg$fail(expected1) {
        if (peg$currPos < peg$maxFailPos) return;
        if (peg$currPos > peg$maxFailPos) {
            peg$maxFailPos = peg$currPos;
            peg$maxFailExpected = [];
        }
        peg$maxFailExpected.push(expected1);
    }
    function peg$buildSimpleError(message, location1) {
        return new $1a506a341538d943$export$f21cea08b0dd60e8(message, [], "", location1);
    }
    function peg$buildStructuredError(expected1, found, location1) {
        return new $1a506a341538d943$export$f21cea08b0dd60e8($1a506a341538d943$export$f21cea08b0dd60e8.buildMessage(expected1, found), expected1, found, location1);
    }
    function peg$parseChordSheet() {
        let s0, s1, s2;
        s0 = peg$currPos;
        s1 = [];
        s2 = peg$parseLineWithNewline();
        while(s2 !== peg$FAILED){
            s1.push(s2);
            s2 = peg$parseLineWithNewline();
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parseLine();
            if (s2 === peg$FAILED) s2 = null;
            if (s2 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c0(s1, s2);
                s0 = s1;
            } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        return s0;
    }
    function peg$parseLineWithNewline() {
        let s0, s1, s2;
        s0 = peg$currPos;
        s1 = peg$parseLine();
        if (s1 !== peg$FAILED) {
            s2 = peg$parseNewLine();
            if (s2 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c1(s1);
                s0 = s1;
            } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        return s0;
    }
    function peg$parseLine() {
        let s0, s1, s2, s3, s4, s5, s6;
        s0 = peg$currPos;
        s1 = peg$parseLyrics();
        if (s1 === peg$FAILED) s1 = null;
        if (s1 !== peg$FAILED) {
            s2 = [];
            s3 = peg$parseToken();
            while(s3 !== peg$FAILED){
                s2.push(s3);
                s3 = peg$parseToken();
            }
            if (s2 !== peg$FAILED) {
                s3 = peg$parseChord();
                if (s3 === peg$FAILED) s3 = null;
                if (s3 !== peg$FAILED) {
                    s4 = peg$parseComment();
                    if (s4 === peg$FAILED) s4 = null;
                    if (s4 !== peg$FAILED) {
                        s5 = [];
                        s6 = peg$parseSpace();
                        while(s6 !== peg$FAILED){
                            s5.push(s6);
                            s6 = peg$parseSpace();
                        }
                        if (s5 !== peg$FAILED) {
                            peg$savedPos = s0;
                            s1 = peg$c2(s1, s2, s3, s4);
                            s0 = s1;
                        } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        return s0;
    }
    function peg$parseToken() {
        let s0;
        s0 = peg$parseTag();
        if (s0 === peg$FAILED) {
            s0 = peg$parseChordLyricsPair();
            if (s0 === peg$FAILED) s0 = peg$parseMetaTernary();
        }
        return s0;
    }
    function peg$parseComment() {
        let s0, s1, s2, s3, s4, s5;
        s0 = peg$currPos;
        s1 = peg$parseSpace();
        if (s1 === peg$FAILED) s1 = null;
        if (s1 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 35) {
                s2 = peg$c3;
                peg$currPos++;
            } else {
                s2 = peg$FAILED;
                if (peg$silentFails === 0) peg$fail(peg$c4);
            }
            if (s2 !== peg$FAILED) {
                s3 = peg$currPos;
                s4 = [];
                if (peg$c5.test(input.charAt(peg$currPos))) {
                    s5 = input.charAt(peg$currPos);
                    peg$currPos++;
                } else {
                    s5 = peg$FAILED;
                    if (peg$silentFails === 0) peg$fail(peg$c6);
                }
                while(s5 !== peg$FAILED){
                    s4.push(s5);
                    if (peg$c5.test(input.charAt(peg$currPos))) {
                        s5 = input.charAt(peg$currPos);
                        peg$currPos++;
                    } else {
                        s5 = peg$FAILED;
                        if (peg$silentFails === 0) peg$fail(peg$c6);
                    }
                }
                if (s4 !== peg$FAILED) s3 = input.substring(s3, peg$currPos);
                else s3 = s4;
                if (s3 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c7(s3);
                    s0 = s1;
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        return s0;
    }
    function peg$parseChordLyricsPair() {
        let s0, s1, s2, s3, s4;
        s0 = peg$currPos;
        s1 = peg$parseChord();
        if (s1 !== peg$FAILED) {
            s2 = peg$currPos;
            s3 = [];
            s4 = peg$parseLyrics();
            while(s4 !== peg$FAILED){
                s3.push(s4);
                s4 = peg$parseLyrics();
            }
            if (s3 !== peg$FAILED) s2 = input.substring(s2, peg$currPos);
            else s2 = s3;
            if (s2 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c8(s1, s2);
                s0 = s1;
            } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        return s0;
    }
    function peg$parseLyrics() {
        let s0, s1, s2;
        s0 = peg$currPos;
        s1 = [];
        s2 = peg$parseLyricsChar();
        if (s2 !== peg$FAILED) while(s2 !== peg$FAILED){
            s1.push(s2);
            s2 = peg$parseLyricsChar();
        }
        else s1 = peg$FAILED;
        if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c9(s1);
        }
        s0 = s1;
        return s0;
    }
    function peg$parseChord() {
        let s0, s1, s2, s3, s4;
        s0 = peg$currPos;
        s1 = peg$currPos;
        peg$silentFails++;
        s2 = peg$parseEscape();
        peg$silentFails--;
        if (s2 === peg$FAILED) s1 = undefined;
        else {
            peg$currPos = s1;
            s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 91) {
                s2 = peg$c10;
                peg$currPos++;
            } else {
                s2 = peg$FAILED;
                if (peg$silentFails === 0) peg$fail(peg$c11);
            }
            if (s2 !== peg$FAILED) {
                s3 = [];
                s4 = peg$parseChordChar();
                while(s4 !== peg$FAILED){
                    s3.push(s4);
                    s4 = peg$parseChordChar();
                }
                if (s3 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 93) {
                        s4 = peg$c12;
                        peg$currPos++;
                    } else {
                        s4 = peg$FAILED;
                        if (peg$silentFails === 0) peg$fail(peg$c13);
                    }
                    if (s4 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c14(s3);
                        s0 = s1;
                    } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        return s0;
    }
    function peg$parseChordChar() {
        let s0, s1, s2, s3;
        if (peg$c15.test(input.charAt(peg$currPos))) {
            s0 = input.charAt(peg$currPos);
            peg$currPos++;
        } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) peg$fail(peg$c16);
        }
        if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            s1 = peg$parseEscape();
            if (s1 !== peg$FAILED) {
                s2 = peg$currPos;
                if (input.charCodeAt(peg$currPos) === 92) {
                    s3 = peg$c17;
                    peg$currPos++;
                } else {
                    s3 = peg$FAILED;
                    if (peg$silentFails === 0) peg$fail(peg$c18);
                }
                if (s3 !== peg$FAILED) {
                    peg$savedPos = s2;
                    s3 = peg$c19();
                }
                s2 = s3;
                if (s2 === peg$FAILED) {
                    s2 = peg$currPos;
                    if (input.charCodeAt(peg$currPos) === 93) {
                        s3 = peg$c12;
                        peg$currPos++;
                    } else {
                        s3 = peg$FAILED;
                        if (peg$silentFails === 0) peg$fail(peg$c13);
                    }
                    if (s3 !== peg$FAILED) {
                        peg$savedPos = s2;
                        s3 = peg$c20();
                    }
                    s2 = s3;
                }
                if (s2 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c21(s2);
                    s0 = s1;
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        }
        return s0;
    }
    function peg$parseMetaTernary() {
        let s0, s1, s2, s3, s4, s5, s6, s7, s8;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 2) === peg$c22) {
            s1 = peg$c22;
            peg$currPos += 2;
        } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) peg$fail(peg$c23);
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parse_();
            if (s2 !== peg$FAILED) {
                s3 = peg$currPos;
                s4 = peg$parseMetaVariableName();
                if (s4 === peg$FAILED) s4 = null;
                if (s4 !== peg$FAILED) s3 = input.substring(s3, peg$currPos);
                else s3 = s4;
                if (s3 !== peg$FAILED) {
                    s4 = peg$parseMetaValueTest();
                    if (s4 === peg$FAILED) s4 = null;
                    if (s4 !== peg$FAILED) {
                        s5 = peg$parse_();
                        if (s5 !== peg$FAILED) {
                            s6 = peg$parseMetaTernaryTrueFalseExpressions();
                            if (s6 === peg$FAILED) s6 = null;
                            if (s6 !== peg$FAILED) {
                                s7 = peg$parse_();
                                if (s7 !== peg$FAILED) {
                                    if (input.charCodeAt(peg$currPos) === 125) {
                                        s8 = peg$c24;
                                        peg$currPos++;
                                    } else {
                                        s8 = peg$FAILED;
                                        if (peg$silentFails === 0) peg$fail(peg$c25);
                                    }
                                    if (s8 !== peg$FAILED) {
                                        peg$savedPos = s0;
                                        s1 = peg$c26(s3, s4, s6);
                                        s0 = s1;
                                    } else {
                                        peg$currPos = s0;
                                        s0 = peg$FAILED;
                                    }
                                } else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        return s0;
    }
    function peg$parseMetaValueTest() {
        let s0, s1, s2, s3;
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 61) {
            s1 = peg$c27;
            peg$currPos++;
        } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) peg$fail(peg$c28);
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parse_();
            if (s2 !== peg$FAILED) {
                s3 = peg$parseMetaTestValue();
                if (s3 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c29(s3);
                    s0 = s1;
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        return s0;
    }
    function peg$parseMetaTestValue() {
        let s0, s1, s2;
        s0 = peg$currPos;
        s1 = [];
        s2 = peg$parseChar();
        if (s2 !== peg$FAILED) while(s2 !== peg$FAILED){
            s1.push(s2);
            s2 = peg$parseChar();
        }
        else s1 = peg$FAILED;
        if (s1 !== peg$FAILED) s0 = input.substring(s0, peg$currPos);
        else s0 = s1;
        return s0;
    }
    function peg$parseMetaTernaryTrueFalseExpressions() {
        let s0, s1, s2, s3, s4, s5, s6;
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 124) {
            s1 = peg$c30;
            peg$currPos++;
        } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) peg$fail(peg$c31);
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parse_();
            if (s2 !== peg$FAILED) {
                s3 = peg$parseMetaExpression();
                if (s3 !== peg$FAILED) {
                    s4 = peg$parse_();
                    if (s4 !== peg$FAILED) {
                        s5 = peg$parseMetaTernaryFalseExpression();
                        if (s5 === peg$FAILED) s5 = null;
                        if (s5 !== peg$FAILED) {
                            s6 = peg$parse_();
                            if (s6 !== peg$FAILED) {
                                peg$savedPos = s0;
                                s1 = peg$c32(s3, s5);
                                s0 = s1;
                            } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        return s0;
    }
    function peg$parseMetaTernaryFalseExpression() {
        let s0, s1, s2, s3;
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 124) {
            s1 = peg$c30;
            peg$currPos++;
        } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) peg$fail(peg$c31);
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parse_();
            if (s2 !== peg$FAILED) {
                s3 = peg$parseMetaExpression();
                if (s3 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c33(s3);
                    s0 = s1;
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        return s0;
    }
    function peg$parseMetaVariableName() {
        let s0, s1;
        s0 = [];
        if (peg$c34.test(input.charAt(peg$currPos))) {
            s1 = input.charAt(peg$currPos);
            peg$currPos++;
        } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) peg$fail(peg$c35);
        }
        if (s1 !== peg$FAILED) while(s1 !== peg$FAILED){
            s0.push(s1);
            if (peg$c34.test(input.charAt(peg$currPos))) {
                s1 = input.charAt(peg$currPos);
                peg$currPos++;
            } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) peg$fail(peg$c35);
            }
        }
        else s0 = peg$FAILED;
        return s0;
    }
    function peg$parseMetaExpression() {
        let s0, s1, s2, s3;
        s0 = [];
        s1 = peg$currPos;
        s2 = [];
        s3 = peg$parseChar();
        if (s3 !== peg$FAILED) while(s3 !== peg$FAILED){
            s2.push(s3);
            s3 = peg$parseChar();
        }
        else s2 = peg$FAILED;
        if (s2 !== peg$FAILED) s1 = input.substring(s1, peg$currPos);
        else s1 = s2;
        if (s1 === peg$FAILED) s1 = peg$parseMetaTernary();
        if (s1 !== peg$FAILED) while(s1 !== peg$FAILED){
            s0.push(s1);
            s1 = peg$currPos;
            s2 = [];
            s3 = peg$parseChar();
            if (s3 !== peg$FAILED) while(s3 !== peg$FAILED){
                s2.push(s3);
                s3 = peg$parseChar();
            }
            else s2 = peg$FAILED;
            if (s2 !== peg$FAILED) s1 = input.substring(s1, peg$currPos);
            else s1 = s2;
            if (s1 === peg$FAILED) s1 = peg$parseMetaTernary();
        }
        else s0 = peg$FAILED;
        return s0;
    }
    function peg$parseLyricsChar() {
        let s0, s1;
        s0 = peg$parseChar();
        if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            if (input.charCodeAt(peg$currPos) === 93) {
                s1 = peg$c12;
                peg$currPos++;
            } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) peg$fail(peg$c13);
            }
            if (s1 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c20();
            }
            s0 = s1;
            if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                if (input.charCodeAt(peg$currPos) === 124) {
                    s1 = peg$c30;
                    peg$currPos++;
                } else {
                    s1 = peg$FAILED;
                    if (peg$silentFails === 0) peg$fail(peg$c31);
                }
                if (s1 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c36();
                }
                s0 = s1;
                if (s0 === peg$FAILED) {
                    s0 = peg$currPos;
                    if (input.charCodeAt(peg$currPos) === 125) {
                        s1 = peg$c24;
                        peg$currPos++;
                    } else {
                        s1 = peg$FAILED;
                        if (peg$silentFails === 0) peg$fail(peg$c25);
                    }
                    if (s1 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c37();
                    }
                    s0 = s1;
                }
            }
        }
        return s0;
    }
    function peg$parseChar() {
        let s0, s1, s2, s3;
        if (peg$c38.test(input.charAt(peg$currPos))) {
            s0 = input.charAt(peg$currPos);
            peg$currPos++;
        } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) peg$fail(peg$c39);
        }
        if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            s1 = peg$parseEscape();
            if (s1 !== peg$FAILED) {
                s2 = peg$currPos;
                if (input.charCodeAt(peg$currPos) === 92) {
                    s3 = peg$c17;
                    peg$currPos++;
                } else {
                    s3 = peg$FAILED;
                    if (peg$silentFails === 0) peg$fail(peg$c18);
                }
                if (s3 !== peg$FAILED) {
                    peg$savedPos = s2;
                    s3 = peg$c19();
                }
                s2 = s3;
                if (s2 === peg$FAILED) {
                    s2 = peg$currPos;
                    if (input.charCodeAt(peg$currPos) === 124) {
                        s3 = peg$c30;
                        peg$currPos++;
                    } else {
                        s3 = peg$FAILED;
                        if (peg$silentFails === 0) peg$fail(peg$c31);
                    }
                    if (s3 !== peg$FAILED) {
                        peg$savedPos = s2;
                        s3 = peg$c36();
                    }
                    s2 = s3;
                    if (s2 === peg$FAILED) {
                        s2 = peg$currPos;
                        if (input.charCodeAt(peg$currPos) === 91) {
                            s3 = peg$c10;
                            peg$currPos++;
                        } else {
                            s3 = peg$FAILED;
                            if (peg$silentFails === 0) peg$fail(peg$c11);
                        }
                        if (s3 !== peg$FAILED) {
                            peg$savedPos = s2;
                            s3 = peg$c40();
                        }
                        s2 = s3;
                        if (s2 === peg$FAILED) {
                            s2 = peg$currPos;
                            if (input.charCodeAt(peg$currPos) === 93) {
                                s3 = peg$c12;
                                peg$currPos++;
                            } else {
                                s3 = peg$FAILED;
                                if (peg$silentFails === 0) peg$fail(peg$c13);
                            }
                            if (s3 !== peg$FAILED) {
                                peg$savedPos = s2;
                                s3 = peg$c20();
                            }
                            s2 = s3;
                            if (s2 === peg$FAILED) {
                                s2 = peg$currPos;
                                if (input.charCodeAt(peg$currPos) === 123) {
                                    s3 = peg$c41;
                                    peg$currPos++;
                                } else {
                                    s3 = peg$FAILED;
                                    if (peg$silentFails === 0) peg$fail(peg$c42);
                                }
                                if (s3 !== peg$FAILED) {
                                    peg$savedPos = s2;
                                    s3 = peg$c43();
                                }
                                s2 = s3;
                                if (s2 === peg$FAILED) {
                                    s2 = peg$currPos;
                                    if (input.charCodeAt(peg$currPos) === 125) {
                                        s3 = peg$c24;
                                        peg$currPos++;
                                    } else {
                                        s3 = peg$FAILED;
                                        if (peg$silentFails === 0) peg$fail(peg$c25);
                                    }
                                    if (s3 !== peg$FAILED) {
                                        peg$savedPos = s2;
                                        s3 = peg$c37();
                                    }
                                    s2 = s3;
                                    if (s2 === peg$FAILED) {
                                        s2 = peg$currPos;
                                        if (input.charCodeAt(peg$currPos) === 37) {
                                            s3 = peg$c44;
                                            peg$currPos++;
                                        } else {
                                            s3 = peg$FAILED;
                                            if (peg$silentFails === 0) peg$fail(peg$c45);
                                        }
                                        if (s3 !== peg$FAILED) {
                                            peg$savedPos = s2;
                                            s3 = peg$c46();
                                        }
                                        s2 = s3;
                                        if (s2 === peg$FAILED) {
                                            s2 = peg$currPos;
                                            if (input.charCodeAt(peg$currPos) === 35) {
                                                s3 = peg$c3;
                                                peg$currPos++;
                                            } else {
                                                s3 = peg$FAILED;
                                                if (peg$silentFails === 0) peg$fail(peg$c4);
                                            }
                                            if (s3 !== peg$FAILED) {
                                                peg$savedPos = s2;
                                                s3 = peg$c47();
                                            }
                                            s2 = s3;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                if (s2 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c21(s2);
                    s0 = s1;
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        }
        return s0;
    }
    function peg$parseTag() {
        let s0, s1, s2, s3, s4, s5, s6, s7;
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 123) {
            s1 = peg$c41;
            peg$currPos++;
        } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) peg$fail(peg$c42);
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parse_();
            if (s2 !== peg$FAILED) {
                s3 = peg$currPos;
                s4 = peg$parseTagName();
                if (s4 !== peg$FAILED) s3 = input.substring(s3, peg$currPos);
                else s3 = s4;
                if (s3 !== peg$FAILED) {
                    s4 = peg$parse_();
                    if (s4 !== peg$FAILED) {
                        s5 = peg$parseTagColonWithValue();
                        if (s5 === peg$FAILED) s5 = null;
                        if (s5 !== peg$FAILED) {
                            s6 = peg$parse_();
                            if (s6 !== peg$FAILED) {
                                if (input.charCodeAt(peg$currPos) === 125) {
                                    s7 = peg$c24;
                                    peg$currPos++;
                                } else {
                                    s7 = peg$FAILED;
                                    if (peg$silentFails === 0) peg$fail(peg$c25);
                                }
                                if (s7 !== peg$FAILED) {
                                    peg$savedPos = s0;
                                    s1 = peg$c48(s3, s5);
                                    s0 = s1;
                                } else {
                                    peg$currPos = s0;
                                    s0 = peg$FAILED;
                                }
                            } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        return s0;
    }
    function peg$parseTagColonWithValue() {
        let s0, s1, s2, s3;
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 58) {
            s1 = peg$c49;
            peg$currPos++;
        } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) peg$fail(peg$c50);
        }
        if (s1 !== peg$FAILED) {
            s2 = peg$parse_();
            if (s2 !== peg$FAILED) {
                s3 = peg$parseTagValue();
                if (s3 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c51(s3);
                    s0 = s1;
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        return s0;
    }
    function peg$parseTagName() {
        let s0, s1;
        s0 = [];
        if (peg$c52.test(input.charAt(peg$currPos))) {
            s1 = input.charAt(peg$currPos);
            peg$currPos++;
        } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) peg$fail(peg$c53);
        }
        if (s1 !== peg$FAILED) while(s1 !== peg$FAILED){
            s0.push(s1);
            if (peg$c52.test(input.charAt(peg$currPos))) {
                s1 = input.charAt(peg$currPos);
                peg$currPos++;
            } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) peg$fail(peg$c53);
            }
        }
        else s0 = peg$FAILED;
        return s0;
    }
    function peg$parseTagValue() {
        let s0, s1;
        s0 = [];
        s1 = peg$parseTagValueChar();
        while(s1 !== peg$FAILED){
            s0.push(s1);
            s1 = peg$parseTagValueChar();
        }
        return s0;
    }
    function peg$parseTagValueChar() {
        let s0, s1, s2, s3;
        if (peg$c54.test(input.charAt(peg$currPos))) {
            s0 = input.charAt(peg$currPos);
            peg$currPos++;
        } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) peg$fail(peg$c55);
        }
        if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            s1 = peg$parseEscape();
            if (s1 !== peg$FAILED) {
                s2 = peg$currPos;
                if (input.charCodeAt(peg$currPos) === 92) {
                    s3 = peg$c17;
                    peg$currPos++;
                } else {
                    s3 = peg$FAILED;
                    if (peg$silentFails === 0) peg$fail(peg$c18);
                }
                if (s3 !== peg$FAILED) {
                    peg$savedPos = s2;
                    s3 = peg$c19();
                }
                s2 = s3;
                if (s2 === peg$FAILED) {
                    s2 = peg$currPos;
                    if (input.charCodeAt(peg$currPos) === 125) {
                        s3 = peg$c24;
                        peg$currPos++;
                    } else {
                        s3 = peg$FAILED;
                        if (peg$silentFails === 0) peg$fail(peg$c25);
                    }
                    if (s3 !== peg$FAILED) {
                        peg$savedPos = s2;
                        s3 = peg$c37();
                    }
                    s2 = s3;
                    if (s2 === peg$FAILED) {
                        s2 = peg$currPos;
                        if (input.charCodeAt(peg$currPos) === 123) {
                            s3 = peg$c41;
                            peg$currPos++;
                        } else {
                            s3 = peg$FAILED;
                            if (peg$silentFails === 0) peg$fail(peg$c42);
                        }
                        if (s3 !== peg$FAILED) {
                            peg$savedPos = s2;
                            s3 = peg$c43();
                        }
                        s2 = s3;
                    }
                }
                if (s2 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c21(s2);
                    s0 = s1;
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
            } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        }
        return s0;
    }
    function peg$parse_() {
        let s0, s1;
        peg$silentFails++;
        s0 = [];
        if (peg$c57.test(input.charAt(peg$currPos))) {
            s1 = input.charAt(peg$currPos);
            peg$currPos++;
        } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) peg$fail(peg$c58);
        }
        while(s1 !== peg$FAILED){
            s0.push(s1);
            if (peg$c57.test(input.charAt(peg$currPos))) {
                s1 = input.charAt(peg$currPos);
                peg$currPos++;
            } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) peg$fail(peg$c58);
            }
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) peg$fail(peg$c56);
        }
        return s0;
    }
    function peg$parseSpace() {
        let s0, s1;
        peg$silentFails++;
        s0 = [];
        if (peg$c60.test(input.charAt(peg$currPos))) {
            s1 = input.charAt(peg$currPos);
            peg$currPos++;
        } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) peg$fail(peg$c61);
        }
        if (s1 !== peg$FAILED) while(s1 !== peg$FAILED){
            s0.push(s1);
            if (peg$c60.test(input.charAt(peg$currPos))) {
                s1 = input.charAt(peg$currPos);
                peg$currPos++;
            } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) peg$fail(peg$c61);
            }
        }
        else s0 = peg$FAILED;
        peg$silentFails--;
        if (s0 === peg$FAILED) {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) peg$fail(peg$c59);
        }
        return s0;
    }
    function peg$parseNewLine() {
        let s0;
        s0 = peg$parseCarriageReturn();
        if (s0 === peg$FAILED) {
            s0 = peg$parseLineFeed();
            if (s0 === peg$FAILED) s0 = peg$parseCarriageReturnLineFeed();
        }
        return s0;
    }
    function peg$parseCarriageReturnLineFeed() {
        let s0, s1, s2;
        s0 = peg$currPos;
        s1 = peg$parseCarriageReturn();
        if (s1 !== peg$FAILED) {
            s2 = peg$parseLineFeed();
            if (s2 !== peg$FAILED) {
                s1 = [
                    s1,
                    s2
                ];
                s0 = s1;
            } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
            }
        } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
        }
        return s0;
    }
    function peg$parseLineFeed() {
        let s0;
        if (input.charCodeAt(peg$currPos) === 10) {
            s0 = peg$c62;
            peg$currPos++;
        } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) peg$fail(peg$c63);
        }
        return s0;
    }
    function peg$parseCarriageReturn() {
        let s0;
        if (input.charCodeAt(peg$currPos) === 13) {
            s0 = peg$c64;
            peg$currPos++;
        } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) peg$fail(peg$c65);
        }
        return s0;
    }
    function peg$parseEscape() {
        let s0;
        if (input.charCodeAt(peg$currPos) === 92) {
            s0 = peg$c17;
            peg$currPos++;
        } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) peg$fail(peg$c18);
        }
        return s0;
    }
    function peg$parsePound() {
        let s0;
        if (input.charCodeAt(peg$currPos) === 35) {
            s0 = peg$c3;
            peg$currPos++;
        } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) peg$fail(peg$c4);
        }
        return s0;
    }
    function peg$parsePercent() {
        let s0;
        if (input.charCodeAt(peg$currPos) === 37) {
            s0 = peg$c44;
            peg$currPos++;
        } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) peg$fail(peg$c45);
        }
        return s0;
    }
    peg$result = peg$startRuleFunction();
    if (peg$result !== peg$FAILED && peg$currPos === input.length) return peg$result;
    else {
        if (peg$result !== peg$FAILED && peg$currPos < input.length) peg$fail(peg$endExpectation());
        throw peg$buildStructuredError(peg$maxFailExpected, peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null, peg$maxFailPos < input.length ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1) : peg$computeLocation(peg$maxFailPos, peg$maxFailPos));
    }
}
const $1a506a341538d943$export$98e6a39c04603d36 = $1a506a341538d943$var$peg$parse;


class $e1378a714a1834c5$var$Literal {
    constructor(expression){
        this.string = expression;
    }
    evaluate() {
        return this.string;
    }
    isRenderable() {
        return true;
    }
    clone() {
        return new $e1378a714a1834c5$var$Literal(this.string);
    }
}
var $e1378a714a1834c5$export$2e2bcd8739ae039 = $e1378a714a1834c5$var$Literal;


const $af8d31735c159a26$export$4b194284baed1659 = "verse";
const $af8d31735c159a26$export$8db6c706fc9142b2 = "chorus";
const $af8d31735c159a26$export$c53d0f541b41b88e = "none";
const $af8d31735c159a26$export$c5a6fe907430212e = "indeterminate";
const $af8d31735c159a26$export$f1c9dd0f5207dd5e = "tab";
const $af8d31735c159a26$export$27c95a7104c1f7aa = "symbol";
const $af8d31735c159a26$export$4d318981b5a83836 = "numeric";
const $af8d31735c159a26$export$1321df9b16c30c6a = "numeral";
const $af8d31735c159a26$export$6145372d252f6576 = [
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII"
];


const $8fcf445ea0999053$var$A = "A".charCodeAt(0);
const $8fcf445ea0999053$var$G = "G".charCodeAt(0);
const $8fcf445ea0999053$var$TRANSPOSE_DISTANCE_MAJOR = [
    null,
    0,
    2,
    4,
    5,
    7,
    9,
    11
];
const $8fcf445ea0999053$var$TRANSPOSE_DISTANCE_MINOR = [
    null,
    0,
    2,
    3,
    5,
    7,
    8,
    11
];
function $8fcf445ea0999053$var$keyToCharCode(key) {
    return key.toUpperCase().charCodeAt(0);
}
function $8fcf445ea0999053$var$clamp(note, min, max) {
    let newNote = note;
    if (newNote < min) newNote += 7;
    else if (newNote > max) newNote -= 7;
    return newNote;
}
function $8fcf445ea0999053$var$numeralToNumber(numeral) {
    for(let i = 0, count = (0, $af8d31735c159a26$export$6145372d252f6576).length; i < count; i += 1){
        const romanNumeral = (0, $af8d31735c159a26$export$6145372d252f6576)[i];
        if (romanNumeral === numeral || romanNumeral.toLowerCase() === numeral) return i + 1;
    }
    return null;
}
function $8fcf445ea0999053$var$numberToNumeral(number) {
    return (0, $af8d31735c159a26$export$6145372d252f6576)[number - 1];
}
class $8fcf445ea0999053$var$Note {
    constructor({ note: note , type: type , minor: minor = false  }){
        this._note = note;
        this.type = type;
        this.minor = minor;
    }
    static parse(note) {
        if (/^[A-Ga-g]$/.test(note)) return new $8fcf445ea0999053$var$Note({
            note: note.toUpperCase(),
            type: (0, $af8d31735c159a26$export$27c95a7104c1f7aa)
        });
        if (/^[1-7]$/.test(note)) return new $8fcf445ea0999053$var$Note({
            note: parseInt(note, 10),
            type: (0, $af8d31735c159a26$export$4d318981b5a83836)
        });
        const romanNumeralValue = $8fcf445ea0999053$var$numeralToNumber(note);
        if (romanNumeralValue) return new $8fcf445ea0999053$var$Note({
            note: romanNumeralValue,
            type: (0, $af8d31735c159a26$export$1321df9b16c30c6a),
            minor: note.toLowerCase() === note
        });
        throw new Error(`Invalid note ${note}`);
    }
    toNumeral() {
        if (this.isNumeral()) return this.clone();
        if (this.isNumeric()) return this.set({
            type: (0, $af8d31735c159a26$export$1321df9b16c30c6a)
        });
        throw new Error(`Converting a ${this.type} note to numeral is not supported`);
    }
    toNumeric() {
        if (this.isNumeric()) return this.clone();
        if (this.isNumeral()) return this.set({
            type: (0, $af8d31735c159a26$export$4d318981b5a83836)
        });
        throw new Error(`Converting a ${this.type} note to numeric is not supported`);
    }
    isMinor() {
        return this.minor;
    }
    equals(otherNote) {
        return this._note === otherNote._note && this.type === otherNote.type && this.minor === otherNote.minor;
    }
    clone() {
        return this.set({});
    }
    up() {
        return this.change(1);
    }
    down() {
        return this.change(-1);
    }
    isOneOf(...options) {
        return options.includes(this._note);
    }
    isNumeric() {
        return this.is((0, $af8d31735c159a26$export$4d318981b5a83836));
    }
    isChordSymbol() {
        return this.is((0, $af8d31735c159a26$export$27c95a7104c1f7aa));
    }
    isNumeral() {
        return this.is((0, $af8d31735c159a26$export$1321df9b16c30c6a));
    }
    is(noteType) {
        return this.type === noteType;
    }
    getTransposeDistance(minorKey) {
        if (minorKey) return $8fcf445ea0999053$var$TRANSPOSE_DISTANCE_MINOR[this._note];
        return $8fcf445ea0999053$var$TRANSPOSE_DISTANCE_MAJOR[this._note];
    }
    change(delta) {
        if (this.isChordSymbol()) {
            let charCode;
            charCode = $8fcf445ea0999053$var$keyToCharCode(this._note);
            charCode += delta;
            charCode = $8fcf445ea0999053$var$clamp(charCode, $8fcf445ea0999053$var$A, $8fcf445ea0999053$var$G);
            return this.set({
                note: String.fromCharCode(charCode)
            });
        }
        let newNote = $8fcf445ea0999053$var$clamp(this._note + delta, 1, 7);
        if (newNote < 1) newNote += 7;
        else if (newNote > 7) newNote -= 7;
        return this.set({
            note: newNote
        });
    }
    get note() {
        if (this.isNumeral()) {
            const numeral = $8fcf445ea0999053$var$numberToNumeral(this._note);
            if (this.isMinor()) return numeral.toLowerCase();
            return numeral;
        }
        return this._note;
    }
    toString() {
        switch(this.type){
            case 0, $af8d31735c159a26$export$1321df9b16c30c6a:
                return `${this.minor ? this.note.toLowerCase() : this.note.toUpperCase()}`;
            default:
                return `${this.note}`;
        }
    }
    set(attributes) {
        return new $8fcf445ea0999053$var$Note({
            note: this._note,
            type: this.type,
            minor: this.minor,
            ...attributes
        });
    }
}
var $8fcf445ea0999053$export$2e2bcd8739ae039 = $8fcf445ea0999053$var$Note;



var $6ebb068142750218$export$2e2bcd8739ae039 = {
    "Ab": {
        "B": "Cb"
    },
    "Cb": {
        "B": "Cb",
        "A#": "Bb",
        "E": "Fb"
    },
    "C": {
        "C#": "Db",
        "D#": "Eb",
        "F#": "Gb",
        "G#": "Ab",
        "A#": "Bb"
    },
    "C#": {
        "D#": "Eb",
        "A#": "Bb"
    },
    "Db": {
        "B": "Cb",
        "F#": "Gb"
    },
    "D": {
        "D#": "Eb",
        "A#": "Bb"
    },
    "E": {
        "Ab": "G#",
        "A#": "Bb",
        "D#": "Eb"
    },
    "F": {
        "A#": "Bb",
        "F#": "Gb",
        "C#": "Db",
        "D#": "Eb",
        "G#": "Ab"
    },
    "F#": {
        "A#": "Bb",
        "D#": "Eb"
    },
    "Gb": {
        "A#": "Bb",
        "D#": "Eb",
        "G#": "Ab",
        "B": "Cb",
        "E": "Fb"
    },
    "G": {
        "A#": "Bb",
        "D#": "Eb",
        "G#": "Ab"
    },
    "G#": {
        "A#": "Bb",
        "D#": "Eb"
    },
    "Am": {
        "Gb": "G",
        "G#": "Ab",
        "F#": "Gb",
        "C#": "Db",
        "D#": "Eb",
        "A#": "Bb"
    },
    "Bbm": {
        "Cb": "B"
    },
    "Bm": {
        "A#": "Bb",
        "D#": "Eb"
    },
    "C#m": {
        "A#": "Bb",
        "D#": "Eb"
    },
    "Cm": {
        "G#": "Ab",
        "A#": "Bb",
        "D#": "Eb",
        "F#": "Gb",
        "C#": "Db"
    },
    "Dm": {
        "A#": "Bb",
        "D#": "Eb"
    },
    "Em": {
        "A#": "Bb",
        "D#": "Eb"
    },
    "F#m": {
        "A#": "Bb",
        "D#": "Eb",
        "Gb": "F#",
        "Ab": "G#",
        "Db": "C#"
    },
    "Fm": {
        "G#": "Ab",
        "A#": "Bb",
        "D#": "Eb",
        "F#": "Gb",
        "C#": "Db"
    },
    "Gm": {
        "G#": "Ab",
        "A#": "Bb",
        "D#": "Eb"
    },
    "G#m": {
        "A#": "Bb",
        "D#": "Eb"
    }
};


const $21a34a464e7bc609$export$13215d9ce4923f76 = (collection, Klass)=>{
    const newObject = new Klass();
    collection.push(newObject);
    return newObject;
};
const $21a34a464e7bc609$export$d332d76d125f0cbe = (line)=>line.items.some((item)=>!!item.chords);
const $21a34a464e7bc609$export$e3f63561d52b936d = (item)=>typeof item.evaluate === "function";
const $21a34a464e7bc609$export$bc3bea8325045070 = (str, length)=>{
    let paddedString = str;
    for(let l = str.length; l < length; l += 1, paddedString += " ");
    return paddedString;
};
const $21a34a464e7bc609$export$ee27c052bca048fb = (object)=>object && object.length > 0;
const $21a34a464e7bc609$export$7ee701e290d9865 = (object)=>!$21a34a464e7bc609$export$ee27c052bca048fb(object);
const $21a34a464e7bc609$export$ed9b06b5ee264ad3 = (object)=>$21a34a464e7bc609$export$ee27c052bca048fb(object) ? object : null;
function $21a34a464e7bc609$var$dasherize(string) {
    return string.replace(/[A-Z]/g, (match)=>`-${match.toLowerCase()}`);
}
function $21a34a464e7bc609$export$59d377d2a2e0150a(css, scope) {
    return Object.entries(css).map(([selector, styles])=>{
        const rules = Object.entries(styles).map(([property, value])=>`${$21a34a464e7bc609$var$dasherize(property)}: ${value};`).join("\n  ");
        const scopedSelector = `${scope} ${selector}`.trim();
        return `
${scopedSelector} {
  ${rules}
}`.substring(1);
    }).join("\n\n");
}
function $21a34a464e7bc609$export$b680e6b2c82f8c2f(message) {
    try {
        throw new Error(`DEPRECATION: ${message}`);
    } catch (e) {
        const proc = globalThis.process;
        if (typeof proc === "object" && typeof proc.emitWarning === "function") proc.emitWarning(`${message}\n${e.stack}`);
        else console.warn(`${message}\n${e.stack}`);
    }
}
function $21a34a464e7bc609$export$78d1711480f95c3e(string) {
    return string === null || string === undefined || string === "";
}
function $21a34a464e7bc609$export$595e981f61839426(string, constructor, regexes) {
    if ($21a34a464e7bc609$export$78d1711480f95c3e(string)) return null;
    for(let i = 0, count = regexes.length; i < count; i += 1){
        const match = string.match(regexes[i]);
        if (match) return new constructor(match.groups);
    }
    return null;
}


const $bff5407e03fdc8ee$var$FLAT = "b";
const $bff5407e03fdc8ee$var$SHARP = "#";
const $bff5407e03fdc8ee$var$MODIFIER_TRANSPOSITION = {
    [$bff5407e03fdc8ee$var$SHARP]: 1,
    [$bff5407e03fdc8ee$var$FLAT]: -1
};
const $bff5407e03fdc8ee$var$symbolKeyRegex = /^(?<note>[A-G])(?<modifier>#|b)?(?<minor>m)?$/i;
const $bff5407e03fdc8ee$var$numericKeyRegex = /^(?<modifier>#|b)?(?<note>[1-7])(?<minor>m)?$/;
const $bff5407e03fdc8ee$var$numeralKeyRegex = /^(?<modifier>#|b)?(?<note>I{1,3}|IV|VI{0,2}|i{1,3}|iv|vi{0,2})$/;
const $bff5407e03fdc8ee$var$regexes = [
    $bff5407e03fdc8ee$var$symbolKeyRegex,
    $bff5407e03fdc8ee$var$numericKeyRegex,
    $bff5407e03fdc8ee$var$numeralKeyRegex
];
class $bff5407e03fdc8ee$var$Key {
    modifier = null;
    minor = false;
    static parse(keyString) {
        return (0, $21a34a464e7bc609$export$595e981f61839426)(keyString, $bff5407e03fdc8ee$var$Key, $bff5407e03fdc8ee$var$regexes);
    }
    static wrap(keyStringOrObject) {
        if (keyStringOrObject instanceof $bff5407e03fdc8ee$var$Key) return keyStringOrObject;
        return this.parse(keyStringOrObject);
    }
    static toString(keyStringOrObject) {
        return `${$bff5407e03fdc8ee$var$Key.wrap(keyStringOrObject)}`;
    }
    static distance(oneKey, otherKey) {
        return this.wrap(oneKey).distanceTo(otherKey);
    }
    distanceTo(otherKey) {
        const otherKeyObj = $bff5407e03fdc8ee$var$Key.wrap(otherKey);
        let key = this.useModifier(otherKeyObj.modifier);
        let delta = 0;
        while(!key.equals(otherKeyObj) && delta < 20){
            key = key.transposeUp().useModifier(otherKeyObj.modifier);
            delta += 1;
        }
        return delta;
    }
    constructor({ note: note , modifier: modifier = null , minor: minor = false  }){
        this.note = note instanceof (0, $8fcf445ea0999053$export$2e2bcd8739ae039) ? note : (0, $8fcf445ea0999053$export$2e2bcd8739ae039).parse(note);
        this.modifier = modifier || null;
        this.minor = !!minor || false;
        if (this.minor) this.note.minor = true;
    }
    isMinor() {
        return this.minor || this.note.isMinor();
    }
    clone() {
        return this.set({});
    }
    toChordSymbol(key) {
        if (this.is((0, $af8d31735c159a26$export$27c95a7104c1f7aa))) return this.clone();
        const transposeDistance = this.note.getTransposeDistance(key.minor) + ($bff5407e03fdc8ee$var$MODIFIER_TRANSPOSITION[this.modifier] || 0);
        return key.transpose(transposeDistance).normalize().useModifier(key.modifier);
    }
    toChordSymbolString(key) {
        return this.toChordSymbol(key).toString();
    }
    is(type) {
        return this.note.is(type);
    }
    isNumeric() {
        return this.is((0, $af8d31735c159a26$export$4d318981b5a83836));
    }
    isChordSymbol() {
        return this.is((0, $af8d31735c159a26$export$27c95a7104c1f7aa));
    }
    isNumeral() {
        return this.is((0, $af8d31735c159a26$export$1321df9b16c30c6a));
    }
    equals({ note: note , modifier: modifier = null  }) {
        return this.note.equals(note) && this.modifier === modifier;
    }
    toNumeric(key = null) {
        if (this.isNumeric()) return this.clone();
        if (this.isNumeral()) return this.set({
            note: this.note.toNumeric()
        });
        return this.transposeNoteUpToKey(1, key);
    }
    toNumericString(key = null) {
        return this.toNumeric(key).toString();
    }
    toNumeral(key = null) {
        if (this.isNumeral()) return this.clone();
        if (this.isNumeric()) return this.set({
            note: this.note.toNumeral()
        });
        return this.transposeNoteUpToKey("I", key);
    }
    toNumeralString(key = null) {
        return this.toNumeral(key).toString();
    }
    toString({ showMinor: showMinor = true  } = {}) {
        switch(this.note.type){
            case 0, $af8d31735c159a26$export$27c95a7104c1f7aa:
                return this.formatChordSymbolString(showMinor);
            case 0, $af8d31735c159a26$export$4d318981b5a83836:
                return this.formatNumericString(showMinor);
            case 0, $af8d31735c159a26$export$1321df9b16c30c6a:
                return this.formatNumeralString();
            default:
                throw new Error(`Unexpected note type ${this.note.type}`);
        }
    }
    formatChordSymbolString(showMinor) {
        return `${this.note}${this.modifier || ""}${this.minor && showMinor ? "m" : ""}`;
    }
    formatNumericString(showMinor) {
        return `${this.modifier || ""}${this.note}${this.minor && showMinor ? "m" : ""}`;
    }
    formatNumeralString() {
        return `${this.modifier || ""}${this.note}`;
    }
    transpose(delta) {
        if (delta === 0) return this;
        const originalModifier = this.modifier;
        let transposedKey = this.clone();
        const func = delta < 0 ? "transposeDown" : "transposeUp";
        for(let i = 0, count = Math.abs(delta); i < count; i += 1)transposedKey = transposedKey[func]();
        return transposedKey.useModifier(originalModifier);
    }
    transposeUp() {
        if (this.modifier === $bff5407e03fdc8ee$var$FLAT) return this.set({
            modifier: null
        });
        if (this.note.isOneOf(3, 7, "E", "B")) return this.set({
            note: this.note.up()
        });
        if (this.modifier === $bff5407e03fdc8ee$var$SHARP) return this.set({
            note: this.note.up(),
            modifier: null
        });
        return this.set({
            modifier: $bff5407e03fdc8ee$var$SHARP
        });
    }
    transposeDown() {
        if (this.modifier === $bff5407e03fdc8ee$var$SHARP) return this.set({
            modifier: null
        });
        if (this.note.isOneOf(1, 4, "C", "F")) return this.set({
            note: this.note.down()
        });
        if (this.modifier === $bff5407e03fdc8ee$var$FLAT) return this.set({
            note: this.note.down(),
            modifier: null
        });
        return this.set({
            modifier: $bff5407e03fdc8ee$var$FLAT
        });
    }
    useModifier(newModifier) {
        if (this.modifier === $bff5407e03fdc8ee$var$FLAT && newModifier === $bff5407e03fdc8ee$var$SHARP) return this.set({
            note: this.note.down(),
            modifier: $bff5407e03fdc8ee$var$SHARP
        });
        if (this.modifier === $bff5407e03fdc8ee$var$SHARP && newModifier === $bff5407e03fdc8ee$var$FLAT) return this.set({
            note: this.note.up(),
            modifier: $bff5407e03fdc8ee$var$FLAT
        });
        return this.clone();
    }
    normalize() {
        if (this.modifier === $bff5407e03fdc8ee$var$SHARP && this.note.isOneOf(3, 7, "E", "B")) return this.set({
            note: this.note.up(),
            modifier: null
        });
        if (this.modifier === $bff5407e03fdc8ee$var$FLAT && this.note.isOneOf(1, 4, "C", "F")) return this.set({
            note: this.note.down(),
            modifier: null
        });
        return this.clone();
    }
    normalizeEnharmonics(key) {
        if (key) {
            const rootKeyString = $bff5407e03fdc8ee$var$Key.wrap(key).toString({
                showMinor: true
            });
            const enharmonics = (0, $6ebb068142750218$export$2e2bcd8739ae039)[rootKeyString];
            const thisKeyString = this.toString({
                showMinor: false
            });
            if (enharmonics && enharmonics[thisKeyString]) return $bff5407e03fdc8ee$var$Key.parse(enharmonics[thisKeyString]);
        }
        return this.clone();
    }
    set(attributes) {
        return new $bff5407e03fdc8ee$var$Key({
            note: this.note.clone(),
            modifier: this.modifier,
            minor: !!this.minor,
            ...attributes
        });
    }
    transposeNoteUpToKey(note, key) {
        let numericKey = new $bff5407e03fdc8ee$var$Key({
            note: note
        });
        let symbolKey = key.clone();
        const reference = this.clone().normalize().useModifier(key.modifier).normalizeEnharmonics(key);
        while(!symbolKey.equals(reference)){
            numericKey = numericKey.transposeUp().useModifier(key.modifier);
            symbolKey = symbolKey.transposeUp().normalize().useModifier(key.modifier).normalizeEnharmonics(key);
        }
        return numericKey;
    }
}
var $bff5407e03fdc8ee$export$2e2bcd8739ae039 = $bff5407e03fdc8ee$var$Key;


const $e12151f977ef7bf6$var$mapping = {
    "2": "2",
    "4": "sus",
    "5": "5",
    "6": "6",
    "7": "7",
    "9": "9",
    "11": "11",
    "13": "13",
    "42": "4(2)",
    "69": "6(9)",
    "sus#42": "sus#42",
    "sus(no5)": "sus(no5)",
    "sus4": "sus",
    "sus": "sus",
    "ma9(-5)": "ma9(b5)",
    "ma9-5": "ma9(b5)",
    "ma9b5": "ma9(b5)",
    "maj9(b5)": "ma9(b5)",
    "+9(-5)": "ma9(b5)",
    "M9-5": "ma9(b5)",
    "+9b5": "ma9(b5)",
    "+9(b5)": "ma9(b5)",
    "maj9(-5)": "ma9(b5)",
    "maj9-5": "ma9(b5)",
    "maj9b5": "ma9(b5)",
    "ma9(b5)": "ma9(b5)",
    "ma9(-13+5)": "ma9(b13#5)",
    "ma9-13+5": "ma9(b13#5)",
    "ma7b13#5": "ma9(b13#5)",
    "maj9(b13#5)": "ma9(b13#5)",
    "+9(-13+5)": "ma9(b13#5)",
    "M9-13+5": "ma9(b13#5)",
    "+9b13#5": "ma9(b13#5)",
    "+9(b13#5)": "ma9(b13#5)",
    "maj9(-13+5)": "ma9(b13#5)",
    "maj9-13+5": "ma9(b13#5)",
    "maj9b13#5": "ma9(b13#5)",
    "ma9(b13#5)": "ma9(b13#5)",
    "ma9(-13)": "ma9(b13)",
    "ma9-13": "ma9(b13)",
    "ma7b13": "ma7(b13)",
    "maj9(b13)": "ma9(b13)",
    "+9(-13)": "ma9(b13)",
    "M9-13": "ma9(b13)",
    "+9b13": "ma9(b13)",
    "+9(b13)": "ma9(b13)",
    "maj9(-13)": "ma9(b13)",
    "maj9-13": "ma9(b13)",
    "maj9b13": "ma9(b13)",
    "ma9(b13)": "ma9(b13)",
    "ma9(13)": "ma9(13)",
    "ma9(+5)": "ma9(#5)",
    "ma9+5": "ma9(#5)",
    "ma9#5": "ma9(#5)",
    "maj9(#5)": "ma9(#5)",
    "+9(+5)": "ma9(#5)",
    "M9+5": "ma9(#5)",
    "+9#5": "ma9(#5)",
    "+9(#5)": "ma9(#5)",
    "maj9(+5)": "ma9(#5)",
    "maj9+5": "ma9(#5)",
    "maj9#5": "ma9(#5)",
    "ma9(#5)": "ma9(#5)",
    "ma9(#4)": "ma9(#4)",
    "ma9(+11+5)": "ma9(#11#5)",
    "ma9+11+5": "ma9(#11#5)",
    "ma7#11#5": "ma13(#11#5)",
    "maj9(#11#5)": "ma9(#11#5)",
    "+9(+11+5)": "ma9(#11#5)",
    "M9+11+5": "ma9(#11#5)",
    "+9#11#5": "ma9(#11#5)",
    "+9(#11#5)": "ma9(#11#5)",
    "maj9(+11+5)": "ma9(#11#5)",
    "maj9+11+5": "ma9(#11#5)",
    "maj9#11#5": "ma9(#11#5)",
    "ma9(#11#5)": "ma9(#11#5)",
    "ma9(+11)": "ma9(#11)",
    "ma9+11": "ma9(#11)",
    "ma7#11": "ma13(#11)",
    "maj9(#11)": "ma9(#11)",
    "+9(+11)": "ma9(#11)",
    "M9+11": "ma9(#11)",
    "+9#11": "ma9(#11)",
    "+9(#11)": "ma9(#11)",
    "maj9(+11)": "ma9(#11)",
    "maj9+11": "ma9(#11)",
    "maj9#11": "ma9(#11)",
    "ma9(#11)": "ma9(#11)",
    "maj9": "ma9",
    "M9": "ma9",
    "+9": "ma9",
    "ma9": "ma9",
    "9(#7)": "ma9",
    "ma7(no3)": "ma7(no3)",
    "ma7(-9)": "ma7(b9)",
    "ma7-9": "ma7(b9)",
    "ma7b9": "ma7(b9)",
    "maj7(b9)": "ma7(b9)",
    "+7(-9)": "ma7(b9)",
    "M7-9": "ma7(b9)",
    "+7b9": "ma7(b9)",
    "+7(b9)": "ma7(b9)",
    "maj7(-9)": "ma7(b9)",
    "maj7-9": "ma7(b9)",
    "maj7b9": "ma7(b9)",
    "ma7(b9)": "ma7(b9)",
    "ma7(-5)": "ma7(b5)",
    "ma7-5": "ma7(b5)",
    "ma7b5": "ma7(b5)",
    "maj7(b5)": "ma7(b5)",
    "+7(-5)": "ma7(b5)",
    "M7-5": "ma7(b5)",
    "+7b5": "ma7(b5)",
    "+7(b5)": "ma7(b5)",
    "maj7(-5)": "ma7(b5)",
    "maj7-5": "ma7(b5)",
    "maj7b5": "ma7(b5)",
    "ma7(b5)": "ma7(b5)",
    "ma7(-13)": "ma7(b13)",
    "ma7-13": "ma7(b13)",
    "maj7(b13)": "ma7(b13)",
    "+7(-13)": "ma7(b13)",
    "M7-13": "ma7(b13)",
    "+7b13": "ma7(b13)",
    "+7(b13)": "ma7(b13)",
    "maj7(-13)": "ma7(b13)",
    "maj7-13": "ma7(b13)",
    "maj7b13": "ma7(b13)",
    "ma7(b13)": "ma7(b13)",
    "ma7(+9)": "ma7(#9)",
    "ma7+9": "ma7(#9)",
    "ma7#9": "ma7(#9)",
    "maj7(#9)": "ma7(#9)",
    "+7(+9)": "ma7(#9)",
    "M7+9": "ma7(#9)",
    "+7#9": "ma7(#9)",
    "+7(#9)": "ma7(#9)",
    "maj7(+9)": "ma7(#9)",
    "maj7+9": "ma7(#9)",
    "maj7#9": "ma7(#9)",
    "ma7(#9)": "ma7(#9)",
    "aug(maj7)": "ma7(#5)",
    "aug(ma7)": "ma7(#5)",
    "aug(+7)": "ma7(#5)",
    "aug(M7)": "ma7(#5)",
    "ma7(+5)": "ma7(#5)",
    "ma7+5": "ma7(#5)",
    "ma7#5": "ma7(#5)",
    "maj7(#5)": "ma7(#5)",
    "+7(+5)": "ma7(#5)",
    "M7+5": "ma7(#5)",
    "+7#5": "ma7(#5)",
    "+7(#5)": "ma7(#5)",
    "maj7(+5)": "ma7(#5)",
    "maj7+5": "ma7(#5)",
    "maj7#5": "ma7(#5)",
    "ma7(#5)": "ma7(#5)",
    "ma7(#4)": "ma7(#4)",
    "ma7(+11)": "ma7(#11)",
    "ma7+11": "ma7(#11)",
    "maj7(#11)": "ma7(#11)",
    "+7(+11)": "ma7(#11)",
    "M7+11": "ma7(#11)",
    "+7#11": "ma7(#11)",
    "+7(#11)": "ma7(#11)",
    "maj7(+11)": "ma7(#11)",
    "maj7+11": "ma7(#11)",
    "maj7#11": "ma7(#11)",
    "ma7(#11)": "ma7(#11)",
    "(triangle)": "ma7",
    "maj7": "ma7",
    "Maj7": "ma7",
    "M7": "ma7",
    "#7": "ma7",
    "+7": "ma7",
    "ma7": "ma7",
    "ma69": "ma6(9)",
    "ma6(9)": "ma6(9)",
    "ma6": "ma6",
    "ma13(-9+5)": "ma13(b9#5)",
    "ma13-9+5": "ma13(b9#5)",
    "ma7b9#5": "ma13(b9#5)",
    "maj13(b9#5)": "ma13(b9#5)",
    "+13(-9+5)": "ma13(b9#5)",
    "M13-9+5": "ma13(b9#5)",
    "+13b9#5": "ma13(b9#5)",
    "+13(b9#5)": "ma13(b9#5)",
    "maj13(-9+5)": "ma13(b9#5)",
    "maj13-9+5": "ma13(b9#5)",
    "maj13b9#5": "ma13(b9#5)",
    "ma13(b9#5)": "ma13(b9#5)",
    "ma13(-9)": "ma13(b9)",
    "ma13-9": "ma13(b9)",
    "ma13b9": "ma13(b9)",
    "maj13(b9)": "ma13(b9)",
    "+13(-9)": "ma13(b9)",
    "M13-9": "ma13(b9)",
    "+13b9": "ma13(b9)",
    "+13(b9)": "ma13(b9)",
    "maj13(-9)": "ma13(b9)",
    "maj13-9": "ma13(b9)",
    "maj13b9": "ma13(b9)",
    "ma13(b9)": "ma13(b9)",
    "ma13(-5)": "ma13(b5)",
    "ma13-5": "ma13(b5)",
    "ma13b5": "ma13(b5)",
    "maj13(b5)": "ma13(b5)",
    "+13(-5)": "ma13(b5)",
    "M13-5": "ma13(b5)",
    "+13b5": "ma13(b5)",
    "+13(b5)": "ma13(b5)",
    "maj13(-5)": "ma13(b5)",
    "maj13-5": "ma13(b5)",
    "maj13b5": "ma13(b5)",
    "ma13(b5)": "ma13(b5)",
    "ma13+9+5": "ma13(#9#5)",
    "ma13(+9+5)": "ma13(#9#5)",
    "ma7#9#5": "ma13(#9#5)",
    "maj13(#9#5)": "ma13(#9#5)",
    "+13+9+5": "ma13(#9#5)",
    "M13(+9+5)": "ma13(#9#5)",
    "+13#9#5": "ma13(#9#5)",
    "+13(#9#5)": "ma13(#9#5)",
    "maj13+9+5": "ma13(#9#5)",
    "maj13(+9+5)": "ma13(#9#5)",
    "maj13#9#5": "ma13(#9#5)",
    "ma13(#9#5)": "ma13(#9#5)",
    "ma13+9": "ma13(#9)",
    "ma13(+9)": "ma13(#9)",
    "ma13#9": "ma13(#9)",
    "maj13(#9)": "ma13(#9)",
    "+13+9": "ma13(#9)",
    "M13(+9)": "ma13(#9)",
    "+13#9": "ma13(#9)",
    "+13(#9)": "ma13(#9)",
    "maj13+9": "ma13(#9)",
    "maj13(+9)": "ma13(#9)",
    "maj13#9": "ma13(#9)",
    "ma13(#9)": "ma13(#9)",
    "ma13(+5)": "ma13(#5)",
    "ma13+5": "ma13(#5)",
    "ma13#5": "ma13(#5)",
    "maj13(#5)": "ma13(#5)",
    "+13(+5)": "ma13(#5)",
    "M13+5": "ma13(#5)",
    "+13#5": "ma13(#5)",
    "+13(#5)": "ma13(#5)",
    "maj13(+5)": "ma13(#5)",
    "maj13+5": "ma13(#5)",
    "maj13#5": "ma13(#5)",
    "ma13(#5)": "ma13(#5)",
    "ma13(+11+5)": "ma13(#11#5)",
    "ma13+11+5": "ma13(#11#5)",
    "maj13(#11#5)": "ma13(#11#5)",
    "+13(+11+5)": "ma13(#11#5)",
    "M13+11+5": "ma13(#11#5)",
    "+13#11#5": "ma13(#11#5)",
    "+13(#11#5)": "ma13(#11#5)",
    "maj13(+11+5)": "ma13(#11#5)",
    "maj13+11+5": "ma13(#11#5)",
    "maj13#11#5": "ma13(#11#5)",
    "ma13(#11#5)": "ma13(#11#5)",
    "ma13(+11)": "ma13(#11)",
    "ma13+11": "ma13(#11)",
    "maj13(#11)": "ma13(#11)",
    "+13(+11)": "ma13(#11)",
    "M13+11": "ma13(#11)",
    "+13#11": "ma13(#11)",
    "+13(#11)": "ma13(#11)",
    "maj13(+11)": "ma13(#11)",
    "maj13+11": "ma13(#11)",
    "maj13#11": "ma13(#11)",
    "ma13(#11)": "ma13(#11)",
    "M13": "ma13",
    "+13": "ma13",
    "ma13": "ma13",
    "13(#7)": "ma13",
    "ma11-9": "ma11(b9)",
    "ma11(-9)": "ma11(b9)",
    "ma11b9": "ma11(b9)",
    "maj11(b9)": "ma11(b9)",
    "+11-9": "ma11(b9)",
    "M11(-9)": "ma11(b9)",
    "+11b9": "ma11(b9)",
    "+11(b9)": "ma11(b9)",
    "maj11-9": "ma11(b9)",
    "maj11(-9)": "ma11(b9)",
    "maj11b9": "ma11(b9)",
    "ma11(b9)": "ma11(b9)",
    "ma11(-5)": "ma11(b5)",
    "ma11-5": "ma11(b5)",
    "ma11b5": "ma11(b5)",
    "maj11(b5)": "ma11(b5)",
    "+11(-5)": "ma11(b5)",
    "M11-5": "ma11(b5)",
    "+11b5": "ma11(b5)",
    "+11(b5)": "ma11(b5)",
    "maj11(-5)": "ma11(b5)",
    "maj11-5": "ma11(b5)",
    "maj11b5": "ma11(b5)",
    "ma11(b5)": "ma11(b5)",
    "ma11(-13)": "ma11(b13)",
    "ma11-13": "ma11(b13)",
    "ma11b13": "ma11(b13)",
    "maj11(b13)": "ma11(b13)",
    "+11(-13)": "ma11(b13)",
    "M11-13": "ma11(b13)",
    "+11b13": "ma11(b13)",
    "+11(b13)": "ma11(b13)",
    "maj11(-13)": "ma11(b13)",
    "maj11-13": "ma11(b13)",
    "maj11b13": "ma11(b13)",
    "ma11(b13)": "ma11(b13)",
    "ma11(+9)": "ma11(#9)",
    "ma11+9": "ma11(#9)",
    "ma11#9": "ma11(#9)",
    "maj11(#9)": "ma11(#9)",
    "+11(+9)": "ma11(#9)",
    "M11+9": "ma11(#9)",
    "+11#9": "ma11(#9)",
    "+11(#9)": "ma11(#9)",
    "maj11(+9)": "ma11(#9)",
    "maj11+9": "ma11(#9)",
    "maj11#9": "ma11(#9)",
    "ma11(#9)": "ma11(#9)",
    "ma11(+5)": "ma11(#5)",
    "ma11+5": "ma11(#5)",
    "ma11#5": "ma11(#5)",
    "maj11(#5)": "ma11(#5)",
    "+11(+5)": "ma11(#5)",
    "M11+5": "ma11(#5)",
    "+11#5": "ma11(#5)",
    "+11(#5)": "ma11(#5)",
    "maj11(+5)": "ma11(#5)",
    "maj11+5": "ma11(#5)",
    "maj11#5": "ma11(#5)",
    "ma11(#5)": "ma11(#5)",
    "M11": "ma11",
    "+11": "ma11",
    "ma11": "ma11",
    "11(+7)": "ma11",
    "11+7": "ma11",
    "11#7": "ma11",
    "11(#7)": "ma11",
    "m9M7": "m9(ma7)",
    "m9(M7)": "m9(ma7)",
    "m9(+7)": "m9(ma7)",
    "m9(maj7)": "m9(ma7)",
    "m9(ma7)": "m9(ma7)",
    "-9(-5)": "m9(b5)",
    "-9-5": "m11(b5)",
    "-9b5": "m9(b5)",
    "-9(b5)": "m9(b5)",
    "m9(-5)": "m9(b5)",
    "m9-5": "m9(b5)",
    "m9b5": "m9(b5)",
    "m9(b5)": "m9(b5)",
    "-9(-13)": "m9(b13)",
    "-9-13": "m9(b13)",
    "-9b13": "m9(b13)",
    "-9(b13)": "m9(b13)",
    "m9(-13)": "m9(b13)",
    "m9-13": "m9(b13)",
    "m9b13": "m9(b13)",
    "m9(b13)": "m9(b13)",
    "m9(#7)": "m9(#7)",
    "-9(+5)": "m9(#5)",
    "m9+5": "m11(#5)",
    "-9#5": "m9(#5)",
    "-9(#5)": "m9(#5)",
    "m9(+5)": "m9(#5)",
    "m9#5": "m9(#5)",
    "m9(#5)": "m9(#5)",
    "-9(+11)": "m9(#11)",
    "-9+11": "m9(#11)",
    "-9#11": "m9(#11)",
    "-9(#11)": "m9(#11)",
    "m9(+11)": "m9(#11)",
    "m9+11": "m9(#11)",
    "m9#11": "m9(#11)",
    "m9(#11)": "m9(#11)",
    "-9": "m9",
    "min9": "m9",
    "mi9": "m9",
    "m9": "m9",
    "m7sus": "m7sus4",
    "m7sus4": "m7sus4",
    "min7(no3)": "m7(no3)",
    "m7(no3)": "m7(no3)",
    "-7(-9)": "m7(b9)",
    "m7-9": "m7(b9)",
    "-7b9": "m7(b9)",
    "-7(b9)": "m7(b9)",
    "m7(-9)": "m7(b9)",
    "m7b9": "m7(b9)",
    "m7(b9)": "m7(b9)",
    "-7(-5)": "m7(b5)",
    "m7-5": "m7(b5)",
    "-7b5": "m7(b5)",
    "-7(b5)": "m7(b5)",
    "m7(-5)": "m7(b5)",
    "m7b5": "m7(b5)",
    "m7(b5)": "m7(b5)",
    "-7(-13)": "m7(b13)",
    "-7-13": "m7(b13)",
    "-7b13": "m7(b13)",
    "-7(b13)": "m7(b13)",
    "m7(-13)": "m7(b13)",
    "m7-13": "m7(b13)",
    "m7b13": "m7(b13)",
    "m7(b13)": "m7(b13)",
    "m7(add6)": "m7(6)",
    "m7(6)": "m7(6)",
    "m74": "m7(4)",
    "m7(4)": "m7(4)",
    "m7(add11)": "m7(4)",
    "m7(add4)": "m7(4)",
    "m7(11)": "m7(11)",
    "-7(+9)": "m7(#9)",
    "m7+9": "m7(#9)",
    "-7#9": "m7(#9)",
    "-7(#9)": "m7(#9)",
    "m7(+9)": "m7(#9)",
    "m7#9": "m7(#9)",
    "m7(#9)": "m7(#9)",
    "-7(+5)": "m7(#5)",
    "m7+5": "m7(#5)",
    "-7#5": "m7(#5)",
    "-7(#5)": "m7(#5)",
    "m7(+5)": "m7(#5)",
    "m7#5": "m7(#5)",
    "m7(#5)": "m7(#5)",
    "-7(+11)": "m7(#11)",
    "-7+11": "m7(#11)",
    "-7#11": "m7(#11)",
    "-7(#11)": "m7(#11)",
    "m7(+11)": "m7(#11)",
    "m7+11": "m7(#11)",
    "m7#11": "m7(#11)",
    "m7(#11)": "m7(#11)",
    "-7": "m7",
    "min7": "m7",
    "mi7": "m7",
    "m7": "m7",
    "m6+7": "m6(ma7)",
    "m6M7": "m6(ma7)",
    "m6(+7)": "m6(ma7)",
    "m6(M7)": "m6(ma7)",
    "m6(ma7)": "m6(ma7)",
    "m69": "m6(9)",
    "m6(add9)": "m6(9)",
    "m6add9": "m6(9)",
    "m6(9)": "m6(9)",
    "m6(#5)": "m6(#5)",
    "-6": "m6",
    "min6": "m6",
    "mi6": "m6",
    "m6": "m6",
    "m4": "m4",
    "madd2": "m2",
    "m(add2)": "m2",
    "min2": "m2",
    "mi2": "m2",
    "m2": "m2",
    "-13(-13)": "m13(b9)",
    "-13-13": "m13(b9)",
    "-13b13": "m13(b9)",
    "-13(b13)": "m13(b9)",
    "m13(-9)": "m13(b9)",
    "m13-9": "m13(b9)",
    "m13b9": "m13(b9)",
    "m13(b9)": "m13(b9)",
    "-13(-5)": "m13(b5)",
    "-13-5": "m13(b5)",
    "-13b5": "m13(b5)",
    "-13(b5)": "m13(b5)",
    "m13(-5)": "m13(b5)",
    "m13-5": "m13(b5)",
    "m13b5": "m13(b5)",
    "m13(b5)": "m13(b5)",
    "-13+9": "m13(#9)",
    "-13(+9)": "m13(#9)",
    "-13#9": "m13(#9)",
    "-13(#9)": "m13(#9)",
    "m13+9": "m13(#9)",
    "m13(+9)": "m13(#9)",
    "m13#9": "m13(#9)",
    "m13(#9)": "m13(#9)",
    "-13(+5)": "m13(#5)",
    "m13+5": "m13(#5)",
    "-13#5": "m13(#5)",
    "-13(#5)": "m13(#5)",
    "m13(+5)": "m13(#5)",
    "m13#5": "m13(#5)",
    "m13(#5)": "m13(#5)",
    "-13(+11)": "m13(#11)",
    "-13+11": "m13(#11)",
    "-13#11": "m13(#11)",
    "-13(#11)": "m13(#11)",
    "m13(+11)": "m13(#11)",
    "m13+11": "m13(#11)",
    "m13#11": "m13(#11)",
    "m13(#11)": "m13(#11)",
    "-13": "m13",
    "min13": "m13",
    "mi13": "m13",
    "m13": "m13",
    "-11-9-13": "m11(b9b13)",
    "-11(-9-13)": "m11(b9b13)",
    "-11b9b13": "m11(b9b13)",
    "-11(b9b13)": "m11(b9b13)",
    "m11-9-13": "m11(b9b13)",
    "m11(-9-13)": "m11(b9b13)",
    "m11b9b13": "m11(b9b13)",
    "m11(b9b13)": "m11(b9b13)",
    "-11(+5-9)": "m11(b9#5)",
    "m9+5-9": "m11(b9#5)",
    "-11#5b9": "m11(b9#5)",
    "-11(#5b9)": "m11(b9#5)",
    "m11(+5-9)": "m11(b9#5)",
    "m11+5-9": "m11(b9#5)",
    "m11#5b9": "m11(b9#5)",
    "m11(#5b9)": "m11(b9#5)",
    "m11(b9#5)": "m11(b9#5)",
    "-11-9": "m11(b9)",
    "-11(-9)": "m11(b9)",
    "-11b9": "m11(b9)",
    "-11(b9)": "m11(b9)",
    "m11-9": "m11(b9)",
    "m11(-9)": "m11(b9)",
    "m11b9": "m11(b9)",
    "m11(b9)": "m11(b9)",
    "-11(-5-9)": "m11(b5b9)",
    "-11-5-9": "m11(b5b9)",
    "-11b5b9": "m11(b5b9)",
    "-11(b5b9)": "m11(b5b9)",
    "m11(-5-9)": "m11(b5b9)",
    "m11-5-9": "m11(b5b9)",
    "m11b5b9": "m11(b5b9)",
    "m11(b5b9)": "m11(b5b9)",
    "-11-5-13": "m11(b5b13)",
    "-11(-5-13)": "m11(b5b13)",
    "-11b5b13": "m11(b5b13)",
    "-11(b5b13)": "m11(b5b13)",
    "m11-5-13": "m11(b5b13)",
    "m11(-5-13)": "m11(b5b13)",
    "m11b5b13": "m11(b5b13)",
    "m11(b5b13)": "m11(b5b13)",
    "-11(-5+9)": "m11(b5#9)",
    "-11-5+9": "m11(b5#9)",
    "-11b5#9": "m11(b5#9)",
    "-11(b5#9)": "m11(b5#9)",
    "m11(-5+9)": "m11(b5#9)",
    "m11-5+9": "m11(b5#9)",
    "m11b5#9": "m11(b5#9)",
    "m11(b5#9)": "m11(b5#9)",
    "-11(-5)": "m11(b5)",
    "-11b5": "m11(b5)",
    "-11(b5)": "m11(b5)",
    "m11(-5)": "m11(b5)",
    "m11-5": "m11(b5)",
    "m11b5": "m11(b5)",
    "m11(b5)": "m11(b5)",
    "-11(+5-13)": "m11(b13#5)",
    "-11+5-13": "m11(b13#5)",
    "-11#5b13": "m11(b13#5)",
    "-11(#5b13)": "m11(b13#5)",
    "m11(+5-13)": "m11(b13#5)",
    "m11+5-13": "m11(b13#5)",
    "m11#5b13": "m11(b13#5)",
    "m11(#5b13)": "m11(b13#5)",
    "m11(b13#5)": "m11(b13#5)",
    "-11(-13)": "m11(b13)",
    "-11-13": "m11(b13)",
    "-11b13": "m11(b13)",
    "-11(b13)": "m11(b13)",
    "m11(-13)": "m11(b13)",
    "m11-13": "m11(b13)",
    "m11b13": "m11(b13)",
    "m11(b13)": "m11(b13)",
    "-11(+9-13)": "m11(#9b13)",
    "-11+9-13": "m11(#9b13)",
    "-11#9b13": "m11(#9b13)",
    "-11(#9b13)": "m11(#9b13)",
    "m11(+9-13)": "m11(#9b13)",
    "m11+9-13": "m11(#9b13)",
    "m11#9b13": "m11(#9b13)",
    "m11(#9b13)": "m11(#9b13)",
    "-11(+5+9)": "m11(#9#5)",
    "m9+5+9": "m11(#9#5)",
    "-11#5#9": "m11(#9#5)",
    "-11(#5#9)": "m11(#9#5)",
    "m11(+5+9)": "m11(#9#5)",
    "m11+5+9": "m11(#9#5)",
    "m11#5#9": "m11(#9#5)",
    "m11(#5#9)": "m11(#9#5)",
    "m11(#9#5)": "m11(#9#5)",
    "-11(+9)": "m11(#9)",
    "-11+9": "m11(#9)",
    "-11#9": "m11(#9)",
    "-11(#9)": "m11(#9)",
    "m11(+9)": "m11(#9)",
    "m11+9": "m11(#9)",
    "m11#9": "m11(#9)",
    "m11(#9)": "m11(#9)",
    "-11(+5)": "m11(#5)",
    "-11#5": "m11(#5)",
    "-11(#5)": "m11(#5)",
    "m11(+5)": "m11(#5)",
    "m11+5": "m11(#5)",
    "m11#5": "m11(#5)",
    "m11(#5)": "m11(#5)",
    "-11": "m11",
    "min11": "m11",
    "mi11": "m11",
    "m11": "m11",
    "m(no5)": "m(no5)",
    "m+9": "m(ma9)",
    "m(+9)": "m(ma9)",
    "m(maj9)": "m(ma9)",
    "min(maj9)": "m(ma9)",
    "mi(maj9)": "m(ma9)",
    "m(M9)": "m(ma9)",
    "m(ma9)": "m(ma9)",
    "m+7": "m(ma7)",
    "m(+7)": "m(ma7)",
    "m(maj7)": "m(ma7)",
    "min(maj7)": "m(ma7)",
    "mi(maj7)": "m(ma7)",
    "m(M7)": "m(ma7)",
    "m(ma7)": "m(ma7)",
    "m(add9)": "m(9)",
    "m(9)": "m(9)",
    "m(add4)": "m(4)",
    "m(4)": "m(4)",
    "m(add11)": "m(11)",
    "m(11)": "m(11)",
    "-": "m",
    "minor": "m",
    "min": "m",
    "mi": "m",
    "m": "m",
    "dim 7th": "dim7",
    "dim 7": "dim7",
    "o7": "dim7",
    "dim7": "dim7",
    "-b5": "dim",
    "-(b5)": "dim",
    "m(-5)": "dim",
    "m-5": "dim",
    "mb5": "dim",
    "m(b5)": "dim",
    "dim": "dim",
    "b9sus": "b9sus",
    "b69sus": "b69sus",
    "b69(#11)": "b69(#11)",
    "m9sus": "9sus4",
    "m9sus4": "9sus4",
    "9sus": "9sus4",
    "9sus4": "9sus4",
    "9aug": "9aug",
    "9(-5)": "9(b5)",
    "9-5": "9(b5)",
    "9b5": "9(b5)",
    "9(b5)": "9(b5)",
    "9(-13)": "9(b13)",
    "9-13": "9(b13)",
    "9b13": "9(b13)",
    "9(b13)": "9(b13)",
    "x9": "9(#5)",
    "aug9": "9(#5)",
    "9(+5)": "9(#5)",
    "9+5": "9(#5)",
    "9#5": "9(#5)",
    "9(#5)": "9(#5)",
    "9(+11)": "9(#11)",
    "9+11": "9(#11)",
    "9#11": "9(#11)",
    "9(#11)": "9(#11)",
    "dom 9": "9",
    "dom9": "9",
    "7sus": "7sus4",
    "7sus4": "7sus4",
    "7sus(b9)": "7sus(b9)",
    "7sus(6)": "7sus(6)",
    "7b9sus4": "7b9sus4",
    "7aug5": "7aug5",
    "7(no3)": "7(no3)",
    "7(b9b5)": "7(b9b5)",
    "7(-13-9)": "7(b9b13)",
    "7-13-9": "7(b9b13)",
    "7b13b9": "7(b9b13)",
    "7(b13b9)": "7(b9b13)",
    "7(-9-13)": "7(b9b13)",
    "7-9-13": "7(b9b13)",
    "7b9b13": "7(b9b13)",
    "7(b9b13)": "7(b9b13)",
    "7(+5-9)": "7(b9#5)",
    "7+5-9": "7(b9#5)",
    "7#5b9": "7(b9#5)",
    "7(#5b9)": "7(b9#5)",
    "7(b9#5)": "7(b9#5)",
    "7(-9)": "7(b9)",
    "7-9": "7(b9)",
    "7b9": "7(b9)",
    "7(b9)": "7(b9)",
    "7(-5-9)": "7(b5b9)",
    "7-5-9": "7(b5b9)",
    "7b5b9": "7(b5b9)",
    "7(b5b9)": "7(b5b9)",
    "7(-5+9)": "7(b5#9)",
    "7-5+9": "7(b5#9)",
    "7b5#9": "7(b5#9)",
    "7(b5#9)": "7(b5#9)",
    "7(-5+11)": "7(b5#11)",
    "7-5+11": "7(b5#11)",
    "7b5#11": "7(b5#11)",
    "7(b5#11)": "7(b5#11)",
    "7(-5)": "7(b5)",
    "7-5": "7(b5)",
    "7b5": "7(b5)",
    "7(b5)": "7(b5)",
    "7(-13)": "7(b13)",
    "7-13": "7(b13)",
    "7b13": "7(b13)",
    "7(b13)": "7(b13)",
    "7(6)": "7(6)",
    "7(#9b5)": "7(#9b5)",
    "7(-13+9)": "7(#9b13)",
    "7-13+9": "7(#9b13)",
    "7b13#9": "7(#9b13)",
    "7(b13#9)": "7(#9b13)",
    "7+9-13": "7(#9b13)",
    "7(+9-13)": "7(#9b13)",
    "7#9b13": "7(#9b13)",
    "7(#9b13)": "7(#9b13)",
    "7(+5+9)": "7(#9#5)",
    "7+5+9": "7(#9#5)",
    "7#5#9": "7(#9#5)",
    "7(#5#9)": "7(#9#5)",
    "7(#9#5)": "7(#9#5)",
    "7(+9)": "7(#9)",
    "7+9": "7(#9)",
    "7#9": "7(#9)",
    "7(#9)": "7(#9)",
    "7(+5+11)": "7(#5#11)",
    "7+5+11": "7(#5#11)",
    "7#5#11": "7(#5#11)",
    "7(#5#11)": "7(#5#11)",
    "aug 7th": "7(#5)",
    "aug 7": "7(#5)",
    "x7": "7(#5)",
    "7(+5)": "7(#5)",
    "7+5": "7(#5)",
    "7#5": "7(#5)",
    "aug7": "7(#5)",
    "7(#5)": "7(#5)",
    "7(+11)": "7(#11)",
    "7+11": "7(#11)",
    "7#11": "7(#11)",
    "7(#11)": "7(#11)",
    "dom 7th": "7",
    "dom 7": "7",
    "dom7": "7",
    "6(add9)": "6(9)",
    "6(9)": "6(9)",
    "6(no3)": "6(no3)",
    "6(b9)": "6(b9)",
    "6(2)": "6(2)",
    "5(no3)": "5",
    "(no 3rd)": "5",
    "(no 3)": "5",
    "(no3)": "5",
    "no3": "5",
    "sus42": "4(2)",
    "4(2)": "4(2)",
    "2(no3)": "2(no3)",
    "2(ma7)": "2(ma7)",
    "sus2(4)": "2(4)",
    "2(4)": "2(4)",
    "2(+7)": "2(+7)",
    "2(#4)(#42)(2#4)": "2(#4)(#42)(2#4)",
    "(#4)2": "2(#4)",
    "2(#4)": "2(#4)",
    "2(+4)": "2(#4)",
    "2#4": "2(#4)",
    "2+4": "2(#4)",
    "2(#11)": "2(#11)",
    "add9(no3)": "2",
    "sus2": "2",
    "m13sus": "13sus4",
    "m13sus4": "13sus4",
    "13sus": "13sus4",
    "13sus4": "13sus4",
    "13(-9-5)": "13(b9b5)",
    "13-9-5": "13(b9b5)",
    "13b9b5": "13(b9b5)",
    "13(b9b5)": "13(b9b5)",
    "13(-9+5)": "13(b9#5)",
    "13-9+5": "13(b9#5)",
    "13b9#5": "13(b9#5)",
    "13(b9#5)": "13(b9#5)",
    "13(-9)": "13(b9)",
    "13-9": "13(b9)",
    "13b9": "13(b9)",
    "13(b9)": "13(b9)",
    "13(-5)": "13(b5)",
    "13-5": "13(b5)",
    "13b5": "13(b5)",
    "13(b5)": "13(b5)",
    "13(add4)": "13(add4)",
    "13+9-5": "13(#9b5)",
    "13(+9-5)": "13(#9b5)",
    "13#9b5": "13(#9b5)",
    "13(#9b5)": "13(#9b5)",
    "13+9+5": "13(#9#5)",
    "13(+9+5)": "13(#9#5)",
    "13#9#5": "13(#9#5)",
    "13(#9#5)": "13(#9#5)",
    "13+9": "13(#9)",
    "13(+9)": "13(#9)",
    "13#9": "13(#9)",
    "13(#9)": "13(#9)",
    "13(+5)": "13(#5)",
    "13+5": "13(#5)",
    "13#5": "13(#5)",
    "13(#5)": "13(#5)",
    "13(+11)": "13(#11)",
    "13+11": "13(#11)",
    "13#11": "13(#11)",
    "13(#11)": "13(#11)",
    "dom 13": "13",
    "dom13": "13",
    "m11sus": "11sus4",
    "m11sus4": "11sus4",
    "11sus": "11sus4",
    "11sus4": "11sus4",
    "11(-9)": "11(b9)",
    "11-9": "11(b9)",
    "11b9": "11(b9)",
    "11(b9)": "11(b9)",
    "11(-5)": "11(b5)",
    "11-5": "11(b5)",
    "11b5": "11(b5)",
    "11(b5)": "11(b5)",
    "11(-13)": "11(b13)",
    "11-13": "11(b13)",
    "11b13": "11(b13)",
    "11(b13)": "11(b13)",
    "11(+9)": "11(#9)",
    "11+9": "11(#9)",
    "11#9": "11(#9)",
    "11(#9)": "11(#9)",
    "11(+5)": "11(#5)",
    "11+5": "11(#5)",
    "11#5": "11(#5)",
    "11(#5)": "11(#5)",
    "dom 11": "11",
    "dom11": "11",
    "x": "+",
    "(+5)": "+",
    "+5": "+",
    "#5": "+",
    "(#5)": "+",
    "aug": "+",
    "+": "+",
    "Majj": "[blank]",
    "Ma": "[blank]",
    "ma": "[blank]",
    "M": "[blank]",
    "major": "[blank]",
    "maj": "[blank]",
    "[blank]": "[blank]",
    "unis": "(unis)",
    "(unis)": "(unis)",
    "(b6)": "(b6)",
    "2(6)": "2(6)",
    "b5": "(b5)",
    "(-5)": "(b5)",
    "-5": "(b5)",
    "(b5)": "(b5)",
    "(add9)": "(9)",
    "add9": "(9)",
    "(9)": "(9)",
    "(7)": "(7)",
    "(add6)": "(6)",
    "add6": "(6)",
    "(6)": "(6)",
    "sus(4)": "(4)",
    "(add4)": "(4)",
    "add4": "(4)",
    "(4)": "(4)",
    "(add2)": "(2)",
    "add2": "(2)",
    "(2)": "(2)",
    "(add13)": "(13)",
    "add13": "(13)",
    "(13)": "(13)",
    "(add11)": "(11)",
    "add11": "(11)",
    "(11)": "(11)",
    "(+4)": "(#4)",
    "+4": "(#4)",
    "#4": "(#4)",
    "(#4)": "(#4)"
};
var $e12151f977ef7bf6$export$2e2bcd8739ae039 = $e12151f977ef7bf6$var$mapping;




function $26f57998457eb2d4$var$normalizeChordSuffix(suffix) {
    if ((0, $e12151f977ef7bf6$export$2e2bcd8739ae039)[suffix] === "[blank]") return null;
    return (0, $e12151f977ef7bf6$export$2e2bcd8739ae039)[suffix] || suffix;
}
const $26f57998457eb2d4$var$chordRegex = /^(?<base>[A-G])(?<modifier>#|b)?(?<suffix>[^/\s]*)(\/(?<bassBase>[A-G])(?<bassModifier>#|b)?)?$/i;
const $26f57998457eb2d4$var$numericChordRegex = /^(?<modifier>#|b)?(?<base>[1-7])(?<suffix>[^/\s]*)(\/(?<bassModifier>#|b)?(?<bassBase>[0-7]))?$/;
const $26f57998457eb2d4$var$sortedNumerals = [
    ...(0, $af8d31735c159a26$export$6145372d252f6576)
].sort((numeralA, numeralB)=>numeralB.length - numeralA.length);
const $26f57998457eb2d4$var$numerals = [
    ...$26f57998457eb2d4$var$sortedNumerals,
    ...$26f57998457eb2d4$var$sortedNumerals.map((numeral)=>numeral.toLowerCase()), 
].join("|");
const $26f57998457eb2d4$var$numeralChordRegex = // eslint-disable-next-line max-len
new RegExp(`^(?<modifier>#|b)?(?<base>${$26f57998457eb2d4$var$numerals})(?<suffix>[^/\\s]*)(\\/(?<bassModifier>#|b)?(?<bassBase>${$26f57998457eb2d4$var$numerals}))?$`);
const $26f57998457eb2d4$var$regexes = [
    $26f57998457eb2d4$var$numericChordRegex,
    $26f57998457eb2d4$var$numeralChordRegex,
    $26f57998457eb2d4$var$chordRegex
];
/**
 * Represents a Chord, consisting of a root, suffix (quality) and bass
 */ class $26f57998457eb2d4$var$Chord {
    /**
   * Tries to parse a chord string into a chord
   * @param chordString the chord string, eg `Esus4/G#` or `1sus4/#3`
   * @returns {null|Chord}
   */ static parse(chordString) {
        return (0, $21a34a464e7bc609$export$595e981f61839426)(chordString, $26f57998457eb2d4$var$Chord, $26f57998457eb2d4$var$regexes);
    }
    /**
   * Returns a deep copy of the chord
   * @returns {Chord}
   */ clone() {
        return this.set({});
    }
    /**
   * Converts the chord to a chord symbol, using the supplied key as a reference.
   * For example, a numeric chord `#4` with reference key `E` will return the chord symbol `A#`.
   * When the chord is already a chord symbol, it will return a clone of the object.
   * @param {Key|string} [key=null] the reference key
   * @returns {Chord} the chord symbol
   */ toChordSymbol(key = null) {
        if (this.isChordSymbol()) return this.clone();
        const keyObj = (0, $bff5407e03fdc8ee$export$2e2bcd8739ae039).wrap(key);
        const rootKey = this.root.toChordSymbol(keyObj).normalizeEnharmonics(keyObj);
        let chordSymbolChord = new $26f57998457eb2d4$var$Chord({
            suffix: $26f57998457eb2d4$var$normalizeChordSuffix(this.suffix),
            root: rootKey,
            bass: this.bass?.toChordSymbol(keyObj).normalizeEnharmonics(rootKey)
        });
        if (this.root.isMinor()) chordSymbolChord = chordSymbolChord.makeMinor();
        return chordSymbolChord;
    }
    /**
   * Converts the chord to a chord symbol string, using the supplied key as a reference.
   * For example, a numeric chord `#4` with reference key `E` will return the chord symbol `A#`.
   * When the chord is already a chord symbol, it will return a string version of the chord.
   * @param {Key|string} [key=null] the reference key
   * @returns {string} the chord symbol string
   * @see {toChordSymbol}
   */ toChordSymbolString(key = null) {
        return this.toChordSymbol(key).toString();
    }
    /**
   * Determines whether the chord is a chord symbol
   * @returns {boolean}
   */ isChordSymbol() {
        return this.is((0, $af8d31735c159a26$export$27c95a7104c1f7aa));
    }
    /**
   * Converts the chord to a numeric chord, using the supplied key as a reference.
   * For example, a chord symbol A# with reference key E will return the numeric chord #4.
   * @param {Key|string} [key=null] the reference key
   * @returns {Chord} the numeric chord
   */ toNumeric(key = null) {
        if (this.isNumeric()) return this.clone();
        if (this.isNumeral()) return this.set({
            root: this.root.toNumeric(),
            bass: this.bass?.toNumeric()
        });
        const keyObj = (0, $bff5407e03fdc8ee$export$2e2bcd8739ae039).wrap(key);
        return new $26f57998457eb2d4$var$Chord({
            suffix: $26f57998457eb2d4$var$normalizeChordSuffix(this.suffix),
            root: this.root.toNumeric(keyObj),
            bass: this.bass?.toNumeric(keyObj)
        });
    }
    /**
   * Converts the chord to a numeral chord, using the supplied key as a reference.
   * For example, a chord symbol A# with reference key E will return the numeral chord #IV.
   * @param {Key|string|null} key the reference key. The key is required when converting a chord symbol
   * @returns {Chord} the numeral chord
   */ toNumeral(key = null) {
        if (this.isNumeral()) return this.clone();
        if (this.isNumeric()) return this.set({
            root: this.root.toNumeral(),
            bass: this.bass?.toNumeral()
        });
        const keyObj = (0, $bff5407e03fdc8ee$export$2e2bcd8739ae039).wrap(key);
        return new $26f57998457eb2d4$var$Chord({
            suffix: $26f57998457eb2d4$var$normalizeChordSuffix(this.suffix),
            root: this.root.toNumeral(keyObj),
            bass: this.bass?.toNumeral(keyObj)
        });
    }
    /**
   * Converts the chord to a numeral chord string, using the supplied kye as a reference.
   * For example, a chord symbol A# with reference key E will return the numeral chord #4.
   * @param {Key|string} [key=null] the reference key
   * @returns {string} the numeral chord string
   * @see {toNumeral}
   */ toNumeralString(key = null) {
        return this.toNumeral(key).toString();
    }
    /**
   * Determines whether the chord is numeric
   * @returns {boolean}
   */ isNumeric() {
        return this.is((0, $af8d31735c159a26$export$4d318981b5a83836));
    }
    /**
   * Converts the chord to a numeric chord string, using the supplied kye as a reference.
   * For example, a chord symbol A# with reference key E will return the numeric chord #4.
   * @param {Key|string} [key=null] the reference key
   * @returns {string} the numeric chord string
   * @see {toNumeric}
   */ toNumericString(key = null) {
        return this.toNumeric(key).toString();
    }
    /**
   * Determines whether the chord is a numeral
   * @returns {boolean}
   */ isNumeral() {
        return this.is((0, $af8d31735c159a26$export$1321df9b16c30c6a));
    }
    /**
   * Converts the chord to a string, eg `Esus4/G#` or `1sus4/#3`
   * @returns {string} the chord string
   */ toString() {
        const chordString = this.root.toString({
            showMinor: false
        }) + (this.suffix || "");
        if (this.bass) return `${chordString}/${this.bass.toString()}`;
        return chordString;
    }
    /**
   * Normalizes the chord root and bass notes:
   * - Fb becomes E
   * - Cb becomes B
   * - B# becomes C
   * - E# becomes F
   * - 4b becomes 3
   * - 1b becomes 7
   * - 7# becomes 1
   * - 3# becomes 4
   *
   * Besides that it normalizes the suffix if `normalizeSuffix` is `true`.
   * For example, `sus2` becomes `2`, `sus4` becomes `sus`.
   * All suffix normalizations can be found in `src/normalize_mappings/suffix-mapping.txt`.
   * @param {Key|string} [key=null] the key to normalize to
   * @param {Object} [options={}] options
   * @param {boolean} [options.normalizeSuffix=true] whether to normalize the chord suffix after transposing
   * @returns {Chord} the normalized chord
   */ normalize(key = null, { normalizeSuffix: normalizeSuffix = true  } = {}) {
        const suffix = normalizeSuffix ? $26f57998457eb2d4$var$normalizeChordSuffix(this.suffix) : this.suffix;
        if ((0, $21a34a464e7bc609$export$7ee701e290d9865)(key)) return this.process("normalize").set({
            suffix: suffix
        });
        return this.set({
            suffix: suffix,
            root: this.root.normalizeEnharmonics(key),
            bass: this.bass ? this.bass.normalizeEnharmonics(this.root.toString()) : null
        });
    }
    /**
   * Switches to the specified modifier
   * @param newModifier the modifier to use: `'#'` or `'b'`
   * @returns {Chord} the new, changed chord
   */ useModifier(newModifier) {
        return this.process("useModifier", newModifier);
    }
    /**
   * Transposes the chord up by 1 semitone. Eg. A becomes A#, Eb becomes E
   * @returns {Chord} the new, transposed chord
   */ transposeUp() {
        return this.process("transposeUp");
    }
    /**
   * Transposes the chord down by 1 semitone. Eg. A# becomes A, E becomes Eb
   * @returns {Chord} the new, transposed chord
   */ transposeDown() {
        return this.process("transposeDown");
    }
    /**
   * Transposes the chord by the specified number of semitones
   * @param delta de number of semitones
   * @returns {Chord} the new, transposed chord
   */ transpose(delta) {
        return this.process("transpose", delta);
    }
    constructor({ base: base = null , modifier: modifier = null , suffix: suffix = null , bassBase: bassBase = null , bassModifier: bassModifier = null , root: root = null , bass: bass = null ,  }){
        this.suffix = (0, $21a34a464e7bc609$export$ed9b06b5ee264ad3)(suffix);
        const isMinor = suffix && suffix[0] === "m" && suffix.substring(0, 3).toLowerCase() !== "maj";
        this.root = root || new (0, $bff5407e03fdc8ee$export$2e2bcd8739ae039)({
            note: base,
            modifier: modifier,
            minor: isMinor
        });
        if (bass) this.bass = bass;
        else if (bassBase) this.bass = new (0, $bff5407e03fdc8ee$export$2e2bcd8739ae039)({
            note: bassBase,
            modifier: bassModifier,
            minor: isMinor
        });
        else this.bass = null;
    }
    makeMinor() {
        if (!this.suffix || this.suffix[0] !== "m") return this.set({
            suffix: `m${this.suffix || ""}`
        });
        return this.clone();
    }
    set(properties) {
        return new $26f57998457eb2d4$var$Chord({
            root: this.root.clone(),
            suffix: this.suffix,
            bass: this.bass?.clone(),
            ...properties
        });
    }
    get rootNote() {
        return this.root.note.note;
    }
    process(func, arg = null) {
        return this.set({
            root: this.root[func](arg),
            bass: this.bass ? this.bass[func](arg) : null
        });
    }
    is(type) {
        return this.root.is(type) && (!this.bass || this.bass.is(type));
    }
}
function $26f57998457eb2d4$export$621b8187b24d90c6(chordString) {
    (0, $21a34a464e7bc609$export$b680e6b2c82f8c2f)("parseChord() is deprecated, please use Chord.parse() instead");
    return $26f57998457eb2d4$var$Chord.parse(chordString);
}
var $26f57998457eb2d4$export$2e2bcd8739ae039 = $26f57998457eb2d4$var$Chord;


/**
 * Represents a chord with the corresponding (partial) lyrics
 */ class $d454f4215ba01af2$var$ChordLyricsPair {
    /**
   * Initialises a ChordLyricsPair
   * @param {string} chords The chords
   * @param {string} lyrics The lyrics
   */ constructor(chords = "", lyrics = ""){
        /**
     * The chords
     * @member
     * @type {string}
     */ this.chords = chords || "";
        /**
     * The lyrics
     * @member
     * @type {string}
     */ this.lyrics = lyrics || "";
    }
    /**
   * Indicates whether a ChordLyricsPair should be visible in a formatted chord sheet (except for ChordPro sheets)
   * @returns {boolean}
   */ isRenderable() {
        return true;
    }
    /**
   * Returns a deep copy of the ChordLyricsPair, useful when programmatically transforming a song
   * @returns {ChordLyricsPair}
   */ clone() {
        return new $d454f4215ba01af2$var$ChordLyricsPair(this.chords, this.lyrics);
    }
    toString() {
        return `ChordLyricsPair(chords=${this.chords}, lyrics=${this.lyrics})`;
    }
    set(properties) {
        return new $d454f4215ba01af2$var$ChordLyricsPair(properties.chords || this.chords, properties.lyrics || this.lyrics);
    }
    setLyrics(lyrics) {
        return this.set({
            lyrics: lyrics
        });
    }
    transpose(delta, key = null, { normalizeChordSuffix: normalizeChordSuffix = false  } = {}) {
        const chordObj = (0, $26f57998457eb2d4$export$2e2bcd8739ae039).parse(this.chords);
        if (chordObj) {
            let transposedChord = chordObj.transpose(delta);
            if (key) transposedChord = transposedChord.normalize(key, {
                normalizeSuffix: normalizeChordSuffix
            });
            return this.set({
                chords: transposedChord.toString()
            });
        }
        return this.clone();
    }
}
var $d454f4215ba01af2$export$2e2bcd8739ae039 = $d454f4215ba01af2$var$ChordLyricsPair;


class $cf00b4d3af89fa07$var$AstComponent {
    line = null;
    column = null;
    offset = null;
    constructor(traceInfo = null){
        if (traceInfo) {
            this.line = traceInfo.line;
            this.column = traceInfo.column;
            this.offset = traceInfo.offset;
        }
    }
}
var $cf00b4d3af89fa07$export$2e2bcd8739ae039 = $cf00b4d3af89fa07$var$AstComponent;


const $5e9ede69210ec54a$export$10227cb086d1770c = "album";
const $5e9ede69210ec54a$export$17d8dfb3db842bf = "artist";
const $5e9ede69210ec54a$export$866f445d49bad88e = "capo";
const $5e9ede69210ec54a$export$a29989082612d0d9 = "comment";
const $5e9ede69210ec54a$export$98424633dc8c377f = "composer";
const $5e9ede69210ec54a$export$4ab8c75045d12480 = "copyright";
const $5e9ede69210ec54a$export$bacc88974c736870 = "duration";
const $5e9ede69210ec54a$export$473c1a4819e5180b = "end_of_chorus";
const $5e9ede69210ec54a$export$66a0ef3ffeab32b7 = "end_of_tab";
const $5e9ede69210ec54a$export$640d294ab83f9040 = "end_of_verse";
const $5e9ede69210ec54a$export$7167c830cefcb6b5 = "key";
const $5e9ede69210ec54a$export$430b1920f5feeae = "_key";
const $5e9ede69210ec54a$export$a6901bd008617c61 = "lyricist";
const $5e9ede69210ec54a$export$4f5168acae064e01 = "start_of_chorus";
const $5e9ede69210ec54a$export$8dd1111100e0e88d = "start_of_tab";
const $5e9ede69210ec54a$export$deca399f8cd9b7dc = "start_of_verse";
const $5e9ede69210ec54a$export$5895c693c74b9cf4 = "subtitle";
const $5e9ede69210ec54a$export$bd8d57d0bc5a8478 = "tempo";
const $5e9ede69210ec54a$export$a9905336c0111a3a = "time";
const $5e9ede69210ec54a$export$f1e53f710478ceb4 = "title";
const $5e9ede69210ec54a$export$ae60ab9b4739fc3d = "transpose";
const $5e9ede69210ec54a$export$b7627374a6424f68 = "new_key";
const $5e9ede69210ec54a$export$90b88dc425a06a95 = "year";
const $5e9ede69210ec54a$var$TITLE_SHORT = "t";
const $5e9ede69210ec54a$var$SUBTITLE_SHORT = "st";
const $5e9ede69210ec54a$var$COMMENT_SHORT = "c";
const $5e9ede69210ec54a$var$START_OF_CHORUS_SHORT = "soc";
const $5e9ede69210ec54a$var$END_OF_CHORUS_SHORT = "eoc";
const $5e9ede69210ec54a$var$START_OF_TAB_SHORT = "sot";
const $5e9ede69210ec54a$var$END_OF_TAB_SHORT = "eot";
const $5e9ede69210ec54a$var$NEW_KEY_SHORT = "nk";
const $5e9ede69210ec54a$var$RENDERABLE_TAGS = [
    $5e9ede69210ec54a$export$a29989082612d0d9
];
const $5e9ede69210ec54a$export$57ecf0dc09effb3 = [
    $5e9ede69210ec54a$export$10227cb086d1770c,
    $5e9ede69210ec54a$export$17d8dfb3db842bf,
    $5e9ede69210ec54a$export$866f445d49bad88e,
    $5e9ede69210ec54a$export$98424633dc8c377f,
    $5e9ede69210ec54a$export$4ab8c75045d12480,
    $5e9ede69210ec54a$export$bacc88974c736870,
    $5e9ede69210ec54a$export$7167c830cefcb6b5,
    $5e9ede69210ec54a$export$a6901bd008617c61,
    $5e9ede69210ec54a$export$bd8d57d0bc5a8478,
    $5e9ede69210ec54a$export$a9905336c0111a3a,
    $5e9ede69210ec54a$export$f1e53f710478ceb4,
    $5e9ede69210ec54a$export$5895c693c74b9cf4,
    $5e9ede69210ec54a$export$90b88dc425a06a95, 
];
const $5e9ede69210ec54a$export$75d737e15c3fab80 = [
    $5e9ede69210ec54a$export$430b1920f5feeae
];
const $5e9ede69210ec54a$var$ALIASES = {
    [$5e9ede69210ec54a$var$TITLE_SHORT]: $5e9ede69210ec54a$export$f1e53f710478ceb4,
    [$5e9ede69210ec54a$var$SUBTITLE_SHORT]: $5e9ede69210ec54a$export$5895c693c74b9cf4,
    [$5e9ede69210ec54a$var$COMMENT_SHORT]: $5e9ede69210ec54a$export$a29989082612d0d9,
    [$5e9ede69210ec54a$var$START_OF_CHORUS_SHORT]: $5e9ede69210ec54a$export$4f5168acae064e01,
    [$5e9ede69210ec54a$var$END_OF_CHORUS_SHORT]: $5e9ede69210ec54a$export$473c1a4819e5180b,
    [$5e9ede69210ec54a$var$START_OF_TAB_SHORT]: $5e9ede69210ec54a$export$8dd1111100e0e88d,
    [$5e9ede69210ec54a$var$END_OF_TAB_SHORT]: $5e9ede69210ec54a$export$66a0ef3ffeab32b7,
    [$5e9ede69210ec54a$var$NEW_KEY_SHORT]: $5e9ede69210ec54a$export$b7627374a6424f68
};
const $5e9ede69210ec54a$var$TAG_REGEX = /^([^:\s]+)(:?\s*(.+))?$/;
const $5e9ede69210ec54a$var$CUSTOM_META_TAG_NAME_REGEX = /^x_(.+)$/;
function $5e9ede69210ec54a$export$3ef04055cb4a269a(tagName) {
    return $5e9ede69210ec54a$export$75d737e15c3fab80.includes(tagName);
}
const $5e9ede69210ec54a$var$translateTagNameAlias = (name)=>{
    if (!name) return name;
    const sanitizedName = name.trim();
    if (sanitizedName in $5e9ede69210ec54a$var$ALIASES) return $5e9ede69210ec54a$var$ALIASES[sanitizedName];
    return sanitizedName;
};
/**
 * Represents a tag/directive. See https://www.chordpro.org/chordpro/chordpro-directives/
 */ class $5e9ede69210ec54a$var$Tag extends (0, $cf00b4d3af89fa07$export$2e2bcd8739ae039) {
    _isMetaTag = false;
    constructor(name, value = "", traceInfo = null){
        super(traceInfo);
        this.parseNameValue(name, value);
    }
    parseNameValue(name, value) {
        if (name === "meta") {
            const [metaName, metaValue] = value.split(/\s(.+)/);
            this.name = metaName;
            this.value = metaValue || "";
            this._isMetaTag = true;
        } else {
            this.name = name;
            this.value = value || "";
        }
    }
    static parse(tag) {
        if (tag instanceof $5e9ede69210ec54a$var$Tag) return tag;
        return this.parseWithRegex(tag, $5e9ede69210ec54a$var$TAG_REGEX);
    }
    static parseWithRegex(tag, regex) {
        const matches = tag.match(regex);
        if (matches !== null) return new $5e9ede69210ec54a$var$Tag(matches[1], matches[3] || null);
        return null;
    }
    set name(name) {
        this._name = $5e9ede69210ec54a$var$translateTagNameAlias(name);
        this._originalName = name;
    }
    /**
   * The tag full name. When the original tag used the short name, `name` will return the full name.
   * @member
   * @type {string}
   */ get name() {
        return this._name.trim();
    }
    /**
   * The original tag name that was used to construct the tag.
   * @member
   * @type {string}
   */ get originalName() {
        return this._originalName.trim();
    }
    set value(value) {
        this._value = value;
    }
    /**
   * The tag value
   * @member
   * @type {string|null}
   */ get value() {
        if (this._value) return `${this._value}`.trim();
        return this._value || null;
    }
    /**
   * Checks whether the tag value is a non-empty string.
   * @returns {boolean}
   */ hasValue() {
        return this.value !== null && this.value.trim().length > 0;
    }
    /**
   * Checks whether the tag is usually rendered inline. It currently only applies to comment tags.
   * @returns {boolean}
   */ isRenderable() {
        return $5e9ede69210ec54a$var$RENDERABLE_TAGS.indexOf(this.name) !== -1;
    }
    /**
   * Checks whether the tag is either a standard meta tag or a custom meta directive (`{x_some_name}`)
   * @returns {boolean}
   */ isMetaTag() {
        return this._isMetaTag || $5e9ede69210ec54a$var$CUSTOM_META_TAG_NAME_REGEX.test(this.name) || $5e9ede69210ec54a$export$57ecf0dc09effb3.indexOf(this.name) !== -1;
    }
    /**
   * Returns a clone of the tag.
   * @returns {Tag} The cloned tag
   */ clone() {
        return new $5e9ede69210ec54a$var$Tag(this._originalName, this.value);
    }
    toString() {
        return `Tag(name=${this.name}, value=${this.name})`;
    }
    set({ value: value  }) {
        return new $5e9ede69210ec54a$var$Tag(this._originalName, value);
    }
    setValue(value) {
        return this.set({
            value: value
        });
    }
}
var $5e9ede69210ec54a$export$2e2bcd8739ae039 = $5e9ede69210ec54a$var$Tag;


/**
 * Represents a comment. See https://www.chordpro.org/chordpro/chordpro-file-format-specification/#overview
 */ class $2115988b22311cb1$var$Comment {
    constructor(content){
        this.content = content;
    }
    /**
   * Indicates whether a Comment should be visible in a formatted chord sheet (except for ChordPro sheets)
   * @returns {boolean}
   */ isRenderable() {
        return false;
    }
    /**
   * Returns a deep copy of the Comment, useful when programmatically transforming a song
   * @returns {Comment}
   */ clone() {
        return new $2115988b22311cb1$var$Comment(this.content);
    }
    toString() {
        return `Comment(content=${this.content})`;
    }
}
var $2115988b22311cb1$export$2e2bcd8739ae039 = $2115988b22311cb1$var$Comment;



/**
 * Represents a line in a chord sheet, consisting of items of type ChordLyricsPair or Tag
 */ class $bc411321e9739719$var$Line {
    /**
   * The items ({@link ChordLyricsPair} or {@link Tag} or {@link Comment}) of which the line consists
   * @member
   * @type {Array.<(ChordLyricsPair|Tag|Comment)>}
   */ items = [];
    /**
   * The line type, This is set by the ChordProParser when it read tags like {start_of_chorus} or {start_of_verse}
   * Values can be {@link VERSE}, {@link CHORUS} or {@link NONE}
   * @member
   * @type {string}
   */ type = (0, $af8d31735c159a26$export$c53d0f541b41b88e);
    /**
   * @ignore
   * @type {ChordLyricsPair}
   */ currentChordLyricsPair = null;
    /**
   * @ignore
   * @type {string|null}
   */ key = null;
    /**
   * @ignore
   * @type {string|null}
   */ transposeKey = null;
    constructor({ type: type , items: items  } = {
        type: (0, $af8d31735c159a26$export$c53d0f541b41b88e),
        items: []
    }){
        this.type = type;
        this.items = items;
    }
    /**
   * Indicates whether the line contains any items
   * @returns {boolean}
   */ isEmpty() {
        return this.items.length === 0;
    }
    /**
   * Adds an item ({@link ChordLyricsPair} or {@link Tag}) to the line
   * @param {ChordLyricsPair|Tag} item The item to be added
   */ addItem(item) {
        if (item instanceof (0, $5e9ede69210ec54a$export$2e2bcd8739ae039)) this.addTag(item);
        else if (item instanceof (0, $d454f4215ba01af2$export$2e2bcd8739ae039)) this.addChordLyricsPair(item);
        else if (item instanceof (0, $2115988b22311cb1$export$2e2bcd8739ae039)) this.addComment(item);
        else this.items.push(item);
    }
    /**
   * Indicates whether the line contains items that are renderable
   * @returns {boolean}
   */ hasRenderableItems() {
        return this.items.some((item)=>item.isRenderable());
    }
    /**
   * Returns a deep copy of the line and all of its items
   * @returns {Line}
   */ clone() {
        return this.mapItems(null);
    }
    mapItems(func) {
        const clonedLine = new $bc411321e9739719$var$Line();
        clonedLine.items = this.items.map((item)=>{
            const clonedItem = item.clone();
            return func ? func(clonedItem) : clonedItem;
        }).filter((item)=>item);
        clonedLine.type = this.type;
        return clonedLine;
    }
    /**
   * Indicates whether the line type is {@link VERSE}
   * @returns {boolean}
   */ isVerse() {
        return this.type === (0, $af8d31735c159a26$export$4b194284baed1659);
    }
    /**
   * Indicates whether the line type is {@link CHORUS}
   * @returns {boolean}
   */ isChorus() {
        return this.type === (0, $af8d31735c159a26$export$8db6c706fc9142b2);
    }
    /**
   * Indicates whether the line contains items that are renderable. Please use {@link hasRenderableItems}
   * @deprecated
   * @returns {boolean}
   */ hasContent() {
        return this.hasRenderableItems();
    }
    addChordLyricsPair(chords = null, lyrics = null) {
        if (chords instanceof (0, $d454f4215ba01af2$export$2e2bcd8739ae039)) this.currentChordLyricsPair = chords;
        else this.currentChordLyricsPair = new (0, $d454f4215ba01af2$export$2e2bcd8739ae039)(chords, lyrics);
        this.items.push(this.currentChordLyricsPair);
        return this.currentChordLyricsPair;
    }
    ensureChordLyricsPair() {
        if (!this.currentChordLyricsPair) this.addChordLyricsPair();
    }
    chords(chr) {
        this.ensureChordLyricsPair();
        this.currentChordLyricsPair.chords += chr;
    }
    lyrics(chr) {
        this.ensureChordLyricsPair();
        this.currentChordLyricsPair.lyrics += chr;
    }
    addTag(name, value = null) {
        const tag = name instanceof (0, $5e9ede69210ec54a$export$2e2bcd8739ae039) ? name : new (0, $5e9ede69210ec54a$export$2e2bcd8739ae039)(name, value);
        this.items.push(tag);
        return tag;
    }
    addComment(content) {
        const comment = content instanceof (0, $2115988b22311cb1$export$2e2bcd8739ae039) ? content : new (0, $2115988b22311cb1$export$2e2bcd8739ae039)(content);
        this.items.push(comment);
        return comment;
    }
    set(properties) {
        return new $bc411321e9739719$var$Line({
            type: this.type,
            items: this.items,
            ...properties
        });
    }
}
var $bc411321e9739719$export$2e2bcd8739ae039 = $bc411321e9739719$var$Line;



/**
 * Represents a paragraph of lines in a chord sheet
 */ class $0c3420c6a3e8a9d7$var$Paragraph {
    /**
   * The {@link Line} items of which the paragraph consists
   * @member
   * @type {Line[]}
   */ lines = [];
    addLine(line) {
        this.lines.push(line);
    }
    /**
   * Tries to determine the common type for all lines. If the types for all lines are equal, it returns that type.
   * If not, it returns {@link INDETERMINATE}
   * @returns {string}
   */ get type() {
        const types = this.lines.map((line)=>line.type);
        const uniqueTypes = [
            ...new Set(types)
        ];
        if (uniqueTypes.length === 1) return uniqueTypes[0];
        return 0, $af8d31735c159a26$export$c5a6fe907430212e;
    }
    /**
   * Indicates whether the paragraph contains lines with renderable items.
   * @see {@link Line.hasRenderableItems}
   * @returns {boolean}
   */ hasRenderableItems() {
        return this.lines.some((line)=>line.hasRenderableItems());
    }
}
var $0c3420c6a3e8a9d7$export$2e2bcd8739ae039 = $0c3420c6a3e8a9d7$var$Paragraph;







class $59abde4480df2d69$var$MetadataAccessors {
    get key() {
        return this.getMetadata((0, $5e9ede69210ec54a$export$7167c830cefcb6b5));
    }
    get title() {
        return this.getMetadata((0, $5e9ede69210ec54a$export$f1e53f710478ceb4));
    }
    get subtitle() {
        return this.getMetadata((0, $5e9ede69210ec54a$export$5895c693c74b9cf4));
    }
    get capo() {
        return this.getMetadata((0, $5e9ede69210ec54a$export$866f445d49bad88e));
    }
    get duration() {
        return this.getMetadata((0, $5e9ede69210ec54a$export$bacc88974c736870));
    }
    get tempo() {
        return this.getMetadata((0, $5e9ede69210ec54a$export$bd8d57d0bc5a8478));
    }
    get time() {
        return this.getMetadata((0, $5e9ede69210ec54a$export$a9905336c0111a3a));
    }
    get year() {
        return this.getMetadata((0, $5e9ede69210ec54a$export$90b88dc425a06a95));
    }
    get album() {
        return this.getMetadata((0, $5e9ede69210ec54a$export$10227cb086d1770c));
    }
    get copyright() {
        return this.getMetadata((0, $5e9ede69210ec54a$export$4ab8c75045d12480));
    }
    get lyricist() {
        return this.getMetadata((0, $5e9ede69210ec54a$export$a6901bd008617c61));
    }
    get artist() {
        return this.getMetadata((0, $5e9ede69210ec54a$export$17d8dfb3db842bf));
    }
    get composer() {
        return this.getMetadata((0, $5e9ede69210ec54a$export$98424633dc8c377f));
    }
}
var $59abde4480df2d69$export$2e2bcd8739ae039 = $59abde4480df2d69$var$MetadataAccessors;



function $1406c61233580008$var$appendValue(array, key, value) {
    if (!array.includes(value)) array.push(value);
}
/**
 * Stores song metadata. Properties can be accessed using the get() method:
 *
 * const metadata = new Metadata({ author: 'John' });
 * metadata.get('author')   // => 'John'
 *
 * See {@link Metadata#get}
 */ class $1406c61233580008$var$Metadata extends (0, $59abde4480df2d69$export$2e2bcd8739ae039) {
    metadata = {};
    constructor(metadata = null){
        super();
        Object.keys(metadata || {}).filter((key)=>!(0, $5e9ede69210ec54a$export$3ef04055cb4a269a)(key)).forEach((key)=>{
            const value = metadata[key];
            if (value instanceof Array) this.metadata[key] = [
                ...value
            ];
            else this.metadata[key] = value;
        });
    }
    contains(key) {
        return key in this.metadata;
    }
    add(key, value) {
        if ((0, $5e9ede69210ec54a$export$3ef04055cb4a269a)(key)) return;
        if (!(key in this.metadata)) {
            this.metadata[key] = value;
            return;
        }
        const currentValue = this.metadata[key];
        if (currentValue === value) return;
        if (currentValue instanceof Array) {
            $1406c61233580008$var$appendValue(currentValue, key, value);
            return;
        }
        this.metadata[key] = [
            currentValue,
            value
        ];
    }
    set(key, value) {
        if (value) this.metadata[key] = value;
        else delete this.metadata[key];
    }
    getMetadata(name) {
        return this.get(name);
    }
    /**
   * Reads a metadata value by key. This method supports simple value lookup, as fetching single array values.
   *
   * This method deprecates direct property access, eg: metadata['author']
   *
   * Examples:
   *
   * const metadata = new Metadata({ lyricist: 'Pete', author: ['John', 'Mary'] });
   * metadata.get('lyricist') // => 'Pete'
   * metadata.get('author')   // => ['John', 'Mary']
   * metadata.get('author.1') // => 'John'
   * metadata.get('author.2') // => 'Mary'
   *
   * Using a negative index will start counting at the end of the list:
   *
   * const metadata = new Metadata({ lyricist: 'Pete', author: ['John', 'Mary'] });
   * metadata.get('author.-1') // => 'Mary'
   * metadata.get('author.-2') // => 'John'
   *
   * @param prop the property name
   * @returns {Array<String>|String} the metadata value(s). If there is only one value, it will return a String,
   * else it returns an array of strings.
   */ get(prop) {
        if (prop === (0, $5e9ede69210ec54a$export$430b1920f5feeae)) return this.calculateKeyFromCapo();
        if (prop in this.metadata) return this.metadata[prop];
        return this.getArrayItem(prop);
    }
    /**
   * Returns a single metadata value. If the actual value is an array, it returns the first value. Else, it returns
   * the value.
   * @ignore
   * @param {string} prop the property name
   * @returns {String} The metadata value
   */ getSingle(prop) {
        const value = this.get(prop);
        if (Array.isArray(value)) return value[0];
        return value;
    }
    parseArrayKey(prop) {
        const match = prop.match(/(.+)\.(-?\d+)$/);
        if (!match) return [];
        const key = match[1];
        const index = parseInt(match[2], 10);
        return [
            key,
            index
        ];
    }
    getArrayItem(prop) {
        const [key, index] = this.parseArrayKey(prop);
        if (!(key && index)) return undefined;
        const arrayValue = this.metadata[key] || [];
        let itemIndex = index;
        if (itemIndex < 0) itemIndex = arrayValue.length + itemIndex;
        else if (itemIndex > 0) itemIndex -= 1;
        return arrayValue[itemIndex];
    }
    /**
   * Returns a deep clone of this Metadata object
   * @returns {Metadata} the cloned Metadata object
   */ clone() {
        return new $1406c61233580008$var$Metadata(this.metadata);
    }
    calculateKeyFromCapo() {
        const capo = this.getSingle((0, $5e9ede69210ec54a$export$866f445d49bad88e));
        const key = this.getSingle((0, $5e9ede69210ec54a$export$7167c830cefcb6b5));
        if (capo && key) return (0, $26f57998457eb2d4$export$2e2bcd8739ae039).parse(key).transpose(parseInt(capo, 10)).toString();
        return undefined;
    }
}
var $1406c61233580008$export$2e2bcd8739ae039 = $1406c61233580008$var$Metadata;


/**
 * Represents a parser warning, currently only used by ChordProParser.
 */ class $ce1dd7d0f2cd2369$var$ParserWarning {
    /**
   * @hideconstructor
   */ constructor(message, lineNumber, column){
        this.message = message;
        this.lineNumber = lineNumber;
        this.column = column;
    }
    /**
   * Returns a stringified version of the warning
   * @returns {string} The string warning
   */ toString() {
        return `Warning: ${this.message} on line ${this.lineNumber} column ${this.column}`;
    }
}
var $ce1dd7d0f2cd2369$export$2e2bcd8739ae039 = $ce1dd7d0f2cd2369$var$ParserWarning;





/**
 * Represents a song in a chord sheet. Currently a chord sheet can only have one song.
 */ class $6f653df65dfdf4ef$var$Song extends (0, $59abde4480df2d69$export$2e2bcd8739ae039) {
    /**
   * The {@link Line} items of which the song consists
   * @member {Line[]}
   */ lines = [];
    currentLine = null;
    warnings = [];
    sectionType = (0, $af8d31735c159a26$export$c53d0f541b41b88e);
    currentKey = null;
    transposeKey = null;
    /**
   * Creates a new {Song} instance
   * @param metadata {Object|Metadata} predefined metadata
   */ constructor(metadata = {}){
        super();
        this.metadata = new (0, $1406c61233580008$export$2e2bcd8739ae039)(metadata);
    }
    get previousLine() {
        const count = this.lines.length;
        if (count >= 2) return this.lines[count - 2];
        return null;
    }
    /**
   * Returns the song lines, skipping the leading empty lines (empty as in not rendering any content). This is useful
   * if you want to skip the "header lines": the lines that only contain meta data.
   * @returns {Line[]} The song body lines
   */ get bodyLines() {
        return this.selectRenderableItems("_bodyLines", "lines");
    }
    /**
   * Returns the song paragraphs, skipping the paragraphs that only contain empty lines
   * (empty as in not rendering any content)
   * @see {@link bodyLines}
   * @returns {Paragraph[]}
   */ get bodyParagraphs() {
        return this.selectRenderableItems("_bodyParagraphs", "paragraphs");
    }
    selectRenderableItems(targetProp, sourceProp) {
        if (this[targetProp] === undefined) {
            this[targetProp] = [
                ...this[sourceProp]
            ];
            const collection = this[targetProp];
            while(collection.length > 0 && !collection[0].hasRenderableItems())this[targetProp].shift();
        }
        return this[targetProp];
    }
    chords(chr) {
        this.currentLine.chords(chr);
    }
    lyrics(chr) {
        this.ensureLine();
        this.currentLine.lyrics(chr);
    }
    addLine(line) {
        this.currentLine = line || (0, $21a34a464e7bc609$export$13215d9ce4923f76)(this.lines, (0, $bc411321e9739719$export$2e2bcd8739ae039));
        this.setCurrentLineType(this.sectionType);
        this.currentLine.transposeKey = this.transposeKey ?? this.currentKey;
        this.currentLine.key = this.currentKey || this.metadata.getSingle((0, $5e9ede69210ec54a$export$7167c830cefcb6b5));
        return this.currentLine;
    }
    /**
   * The {@link Paragraph} items of which the song consists
   * @member {Paragraph[]}
   */ get paragraphs() {
        let currentParagraph = new (0, $0c3420c6a3e8a9d7$export$2e2bcd8739ae039)();
        const paragraphs = [
            currentParagraph
        ];
        this.lines.forEach((line)=>{
            if (line.isEmpty()) {
                currentParagraph = new (0, $0c3420c6a3e8a9d7$export$2e2bcd8739ae039)();
                paragraphs.push(currentParagraph);
            } else if (line.hasRenderableItems()) currentParagraph.addLine(line);
        });
        return paragraphs;
    }
    setCurrentLineType(sectionType) {
        this.currentLine.type = sectionType;
    }
    ensureLine() {
        if (this.currentLine === null) this.addLine();
    }
    addTag(tagContents) {
        const tag = (0, $5e9ede69210ec54a$export$2e2bcd8739ae039).parse(tagContents);
        if (tag.isMetaTag()) this.setMetadata(tag.name, tag.value);
        else if (tag.name === (0, $5e9ede69210ec54a$export$ae60ab9b4739fc3d)) this.transposeKey = tag.value;
        else if (tag.name === (0, $5e9ede69210ec54a$export$b7627374a6424f68)) this.currentKey = tag.value;
        else this.setSectionTypeFromTag(tag);
        this.ensureLine();
        this.currentLine.addTag(tag);
        return tag;
    }
    setSectionTypeFromTag(tag) {
        switch(tag.name){
            case 0, $5e9ede69210ec54a$export$4f5168acae064e01:
                this.startSection((0, $af8d31735c159a26$export$8db6c706fc9142b2), tag);
                break;
            case 0, $5e9ede69210ec54a$export$473c1a4819e5180b:
                this.endSection((0, $af8d31735c159a26$export$8db6c706fc9142b2), tag);
                break;
            case 0, $5e9ede69210ec54a$export$8dd1111100e0e88d:
                this.startSection((0, $af8d31735c159a26$export$f1c9dd0f5207dd5e), tag);
                break;
            case 0, $5e9ede69210ec54a$export$66a0ef3ffeab32b7:
                this.endSection((0, $af8d31735c159a26$export$f1c9dd0f5207dd5e), tag);
                break;
            case 0, $5e9ede69210ec54a$export$deca399f8cd9b7dc:
                this.startSection((0, $af8d31735c159a26$export$4b194284baed1659), tag);
                break;
            case 0, $5e9ede69210ec54a$export$640d294ab83f9040:
                this.endSection((0, $af8d31735c159a26$export$4b194284baed1659), tag);
                break;
            default:
                break;
        }
    }
    startSection(sectionType, tag) {
        this.checkCurrentSectionType((0, $af8d31735c159a26$export$c53d0f541b41b88e), tag);
        this.sectionType = sectionType;
        this.setCurrentLineType(sectionType);
    }
    endSection(sectionType, tag) {
        this.checkCurrentSectionType(sectionType, tag);
        this.sectionType = (0, $af8d31735c159a26$export$c53d0f541b41b88e);
    }
    checkCurrentSectionType(sectionType, tag) {
        if (this.sectionType !== sectionType) this.addWarning(`Unexpected tag {${tag.originalName}, current section is: ${this.sectionType}`, tag);
    }
    addWarning(message, { line: line , column: column  }) {
        const warning = new (0, $ce1dd7d0f2cd2369$export$2e2bcd8739ae039)(message, line, column);
        this.warnings.push(warning);
    }
    addItem(item) {
        if (item instanceof (0, $5e9ede69210ec54a$export$2e2bcd8739ae039)) this.addTag(item);
        else {
            this.ensureLine();
            this.currentLine.addItem(item);
        }
    }
    /**
   * Returns a deep clone of the song
   * @returns {Song} The cloned song
   */ clone() {
        return this.mapItems((item)=>item);
    }
    setMetadata(name, value) {
        this.metadata.add(name, value);
    }
    /**
   * The song's metadata. Please use {@link metadata} instead.
   * @deprecated
   * @returns {@link Metadata} The metadata
   */ get metaData() {
        (0, $21a34a464e7bc609$export$b680e6b2c82f8c2f)('metaData has been deprecated, please use metadata instead (notice the lowercase "d")');
        return this.metadata;
    }
    getMetadata(name) {
        return this.metadata[name] || null;
    }
    /**
   * Returns a copy of the song with the key value set to the specified key. It changes:
   * - the value for `key` in the {@link metadata} set
   * - any existing `key` directive
   * @param {number|null} key the key. Passing `null` will:
   * - remove the current key from {@link metadata}
   * - remove any `key` directive
   * @returns {Song} The changed song
   */ setKey(key) {
        return this.changeMetadata((0, $5e9ede69210ec54a$export$7167c830cefcb6b5), key ? key.toString() : key);
    }
    /**
   * Returns a copy of the song with the key value set to the specified capo. It changes:
   * - the value for `capo` in the {@link metadata} set
   * - any existing `capo` directive
   * @param {number|null} capo the capo. Passing `null` will:
   * - remove the current key from {@link metadata}
   * - remove any `capo` directive
   * @returns {Song} The changed song
   */ setCapo(capo) {
        return this.changeMetadata((0, $5e9ede69210ec54a$export$866f445d49bad88e), capo);
    }
    setDirective(name, value) {
        if (value === null) return this.removeItem((item)=>item instanceof (0, $5e9ede69210ec54a$export$2e2bcd8739ae039) && item.name === name);
        return this.updateItem((item)=>item instanceof (0, $5e9ede69210ec54a$export$2e2bcd8739ae039) && item.name === name, (item)=>item.set({
                value: value
            }), (song)=>song.insertDirective(name, value));
    }
    /**
   * Transposes the song by the specified delta. It will:
   * - transpose all chords, see: {@link Chord#transpose}
   * - transpose the song key in {@link metadata}
   * - update any existing `key` directive
   * @param {number} delta The number of semitones (positive or negative) to transpose with
   * @param {Object} [options={}] options
   * @param {boolean} [options.normalizeChordSuffix=false] whether to normalize the chord suffixes after transposing
   * @returns {Song} The transposed song
   */ transpose(delta, { normalizeChordSuffix: normalizeChordSuffix = false  } = {}) {
        const wrappedKey = (0, $bff5407e03fdc8ee$export$2e2bcd8739ae039).wrap(this.key);
        let transposedKey = null;
        let song = this;
        if (wrappedKey) {
            transposedKey = wrappedKey.transpose(delta);
            song = song.setKey(transposedKey);
        }
        return song.mapItems((item)=>{
            if (item instanceof (0, $d454f4215ba01af2$export$2e2bcd8739ae039)) return item.transpose(delta, transposedKey, {
                normalizeChordSuffix: normalizeChordSuffix
            });
            return item;
        });
    }
    /**
   * Transposes the song up by one semitone. It will:
   * - transpose all chords, see: {@link Chord#transpose}
   * - transpose the song key in {@link metadata}
   * - update any existing `key` directive
   * @param {Object} [options={}] options
   * @param {boolean} [options.normalizeChordSuffix=false] whether to normalize the chord suffixes after transposing
   * @returns {Song} The transposed song
   */ transposeUp({ normalizeChordSuffix: normalizeChordSuffix = false  } = {}) {
        return this.transpose(1, {
            normalizeChordSuffix: normalizeChordSuffix
        });
    }
    /**
   * Transposes the song down by one semitone. It will:
   * - transpose all chords, see: {@link Chord#transpose}
   * - transpose the song key in {@link metadata}
   * - update any existing `key` directive
   * @param {Object} [options={}] options
   * @param {boolean} [options.normalizeChordSuffix=false] whether to normalize the chord suffixes after transposing
   * @returns {Song} The transposed song
   */ transposeDown({ normalizeChordSuffix: normalizeChordSuffix = false  } = {}) {
        return this.transpose(-1, {
            normalizeChordSuffix: normalizeChordSuffix
        });
    }
    /**
   * Returns a copy of the song with the key set to the specified key. It changes:
   * - the value for `key` in the {@link metadata} set
   * - any existing `key` directive
   * - all chords, those are transposed according to the distance between the current and the new key
   * @param {string} newKey The new key.
   * @returns {Song} The changed song
   */ changeKey(newKey) {
        const transpose = this.getTransposeDistance(newKey);
        const updatedSong = this.mapItems((item)=>{
            if (item instanceof (0, $5e9ede69210ec54a$export$2e2bcd8739ae039) && item.name === (0, $5e9ede69210ec54a$export$7167c830cefcb6b5)) return item.set({
                value: newKey
            });
            if (item instanceof (0, $d454f4215ba01af2$export$2e2bcd8739ae039)) return item.transpose(transpose, newKey);
            return item;
        });
        this.setKey(newKey);
        return updatedSong;
    }
    getTransposeDistance(newKey) {
        const wrappedKey = (0, $bff5407e03fdc8ee$export$2e2bcd8739ae039).wrap(this.key);
        if (!wrappedKey) throw new Error(`
Cannot change song key, the original key is unknown.

Either ensure a key directive is present in the song (when using chordpro):
  \`{key: C}\`

Or set the song key before changing key:
  \`song.setKey('C');\``.substring(1));
        return wrappedKey.distanceTo(newKey);
    }
    /**
   * Returns a copy of the song with the directive value set to the specified value.
   * - when there is a matching directive in the song, it will update the directive
   * - when there is no matching directive, it will be inserted
   * If `value` is `null` it will act as a delete, any directive matching `name` will be removed.
   * @param {string} name The directive name
   * @param {string | null} value The value to set, or `null` to remove the directive
   */ changeMetadata(name, value) {
        const updatedSong = this.setDirective(name, value);
        updatedSong.metadata.set(name, value);
        return updatedSong;
    }
    insertDirective(name, value, { after: after = null  } = {}) {
        const insertIndex = this.lines.findIndex((line)=>line.items.some((item)=>!(item instanceof (0, $5e9ede69210ec54a$export$2e2bcd8739ae039)) || after && item instanceof (0, $5e9ede69210ec54a$export$2e2bcd8739ae039) && item.name === after));
        const newLine = new (0, $bc411321e9739719$export$2e2bcd8739ae039)();
        newLine.addTag(name, value);
        const clonedSong = this.clone();
        const { lines: lines  } = clonedSong;
        clonedSong.lines = [
            ...lines.slice(0, insertIndex),
            newLine,
            ...lines.slice(insertIndex)
        ];
        return clonedSong;
    }
    /**
   * Change the song contents inline. Return a new {@link Item} to replace it. Return `null` to remove it.
   * @example
   * // transpose all chords:
   * song.mapItems((item) => {
   *   if (item instanceof ChordLyricsPair) {
   *     return item.transpose(2, 'D');
   *   }
   *
   *   return item;
   * });
   * @param {MapItemsCallback} func the callback function
   * @returns {Song} the changed song
   */ mapItems(func) {
        const clonedSong = new $6f653df65dfdf4ef$var$Song();
        this.lines.forEach((line)=>{
            clonedSong.addLine();
            line.items.forEach((item)=>{
                const changedItem = func(item);
                if (changedItem) clonedSong.addItem(changedItem);
            });
        });
        return clonedSong;
    }
    /**
   * Change the song contents inline. Return a new {@link Line} to replace it. Return `null` to remove it.
   * @example
   * // remove lines with only Tags:
   * song.mapLines((line) => {
   *   if (line.items.every(item => item instanceof Tag)) {
   *     return null;
   *   }
   *
   *   return line;
   * });
   * @param {MapLinesCallback} func the callback function
   * @returns {Song} the changed song
   */ mapLines(func) {
        const clonedSong = new $6f653df65dfdf4ef$var$Song();
        this.lines.forEach((line)=>{
            const changedLine = func(line);
            if (changedLine) {
                clonedSong.addLine();
                changedLine.items.forEach((item)=>clonedSong.addItem(item));
            }
        });
        return clonedSong;
    }
    updateItem(findCallback, updateCallback, notFoundCallback) {
        let found = false;
        const updatedSong = this.mapItems((item)=>{
            if (findCallback(item)) {
                found = true;
                return updateCallback(item);
            }
            return item;
        });
        if (!found) return notFoundCallback(updatedSong);
        return updatedSong;
    }
    removeItem(callback) {
        return this.mapLines((line)=>{
            const { items: items  } = line;
            const index = items.findIndex(callback);
            if (index === -1) return line;
            if (items.length === 1) return null;
            return line.set({
                items: [
                    ...items.slice(0, index),
                    ...items.slice(index + 1)
                ]
            });
        });
    }
}
var $6f653df65dfdf4ef$export$2e2bcd8739ae039 = $6f653df65dfdf4ef$var$Song;





class $55622b65d99fa8e1$var$EvaluationError extends Error {
    constructor(message, line, column, offset){
        super(`${message} on line ${line} column ${column}`);
        this.name = "ExpressionError";
        this.line = line;
        this.column = column;
        this.offset = offset;
    }
}
var $55622b65d99fa8e1$export$2e2bcd8739ae039 = $55622b65d99fa8e1$var$EvaluationError;



class $812df3771838671d$var$Composite {
    expressions = [];
    constructor(expressions, variable = null){
        this.expressions = expressions;
        this.variable = variable;
    }
    evaluate(metadata, metadataSeparator) {
        return this.expressions.map((expression)=>expression.evaluate(metadata, metadataSeparator, this.variable)).join("");
    }
    isRenderable() {
        return true;
    }
    clone() {
        return new $812df3771838671d$var$Composite({
            expressions: this.expressions.map((expression)=>expression.clone()),
            variable: this.variable
        });
    }
}
var $812df3771838671d$export$2e2bcd8739ae039 = $812df3771838671d$var$Composite;



class $b6d84b168638423d$var$Ternary extends (0, $cf00b4d3af89fa07$export$2e2bcd8739ae039) {
    trueExpression = [];
    falseExpression = [];
    constructor({ variable: variable = null , valueTest: valueTest = null , trueExpression: trueExpression = null , falseExpression: falseExpression = null , line: line = null , column: column = null , offset: offset = null ,  } = {}){
        super({
            line: line,
            column: column,
            offset: offset
        });
        this.variable = (0, $21a34a464e7bc609$export$ed9b06b5ee264ad3)(variable);
        this.valueTest = valueTest;
        this.trueExpression = trueExpression;
        this.falseExpression = falseExpression;
    }
    /**
   * Evaluate the meta expression
   * @param {Metadata} metadata The metadata object to use for evaluating the expression
   * @param {string} [metadataSeparator=null] The metadata separator to use if necessary
   * @returns {string} The evaluated expression
   */ evaluate(metadata, metadataSeparator = null, upperContext = null) {
        if (this.variable) return this.evaluateWithVariable(metadata, metadataSeparator);
        if (!upperContext) throw new (0, $55622b65d99fa8e1$export$2e2bcd8739ae039)("Unexpected empty expression", this.line, this.column, this.offset);
        return this.evaluateToString(metadata.get(upperContext), metadataSeparator);
    }
    evaluateToString(value, metadataSeparator) {
        if (Array.isArray(value)) return value.join(metadataSeparator);
        return value;
    }
    evaluateWithVariable(metadata, metadataSeparator) {
        const value = metadata.get(this.variable);
        if ((0, $21a34a464e7bc609$export$ee27c052bca048fb)(value) && (!this.valueTest || value === this.valueTest)) return this.evaluateForTruthyValue(metadata, metadataSeparator, value);
        if (this.falseExpression) return new (0, $812df3771838671d$export$2e2bcd8739ae039)(this.falseExpression, this.variable).evaluate(metadata, metadataSeparator);
        return "";
    }
    evaluateForTruthyValue(metadata, metadataSeparator, value) {
        if (this.trueExpression) return new (0, $812df3771838671d$export$2e2bcd8739ae039)(this.trueExpression, this.variable).evaluate(metadata, metadataSeparator);
        return value;
    }
    isRenderable() {
        return true;
    }
    clone() {
        return new $b6d84b168638423d$var$Ternary({
            variable: this.variable,
            valueTest: this.valueTest,
            trueExpression: this.trueExpression?.map((part)=>part.clone()),
            falseExpression: this.falseExpression?.map((part)=>part.clone()),
            line: this.line,
            column: this.column,
            offset: this.offset
        });
    }
}
var $b6d84b168638423d$export$2e2bcd8739ae039 = $b6d84b168638423d$var$Ternary;



const $1c14afc274b727b7$var$CHORD_SHEET = "chordSheet";
const $1c14afc274b727b7$var$CHORD_LYRICS_PAIR = "chordLyricsPair";
const $1c14afc274b727b7$var$TAG = "tag";
const $1c14afc274b727b7$var$COMMENT = "comment";
const $1c14afc274b727b7$var$TERNARY = "ternary";
const $1c14afc274b727b7$var$LINE = "line";
/**
 * Serializes a song into een plain object, and deserializes the serialized object back into a {@link Song}
 */ class $1c14afc274b727b7$var$ChordSheetSerializer {
    /**
   * Serializes the chord sheet to a plain object, which can be converted to any format like JSON, XML etc
   * Can be deserialized using {@link deserialize}
   * @returns object A plain JS object containing all chord sheet data
   */ serialize(song) {
        return {
            type: $1c14afc274b727b7$var$CHORD_SHEET,
            lines: song.lines.map((line)=>this.serializeLine(line))
        };
    }
    serializeLine(line) {
        return {
            type: $1c14afc274b727b7$var$LINE,
            items: line.items.map((item)=>this.serializeItem(item))
        };
    }
    serializeItem(item) {
        if (item instanceof (0, $5e9ede69210ec54a$export$2e2bcd8739ae039)) return this.serializeTag(item);
        if (item instanceof (0, $d454f4215ba01af2$export$2e2bcd8739ae039)) return this.serializeChordLyricsPair(item);
        if (item instanceof (0, $b6d84b168638423d$export$2e2bcd8739ae039)) return this.serializeTernary(item);
        if (item instanceof (0, $e1378a714a1834c5$export$2e2bcd8739ae039)) return this.serializeLiteral(item);
        throw new Error(`Don't know how to serialize ${item.constructor.name}`);
    }
    serializeTag(tag) {
        return {
            type: $1c14afc274b727b7$var$TAG,
            name: tag.originalName,
            value: tag.value
        };
    }
    serializeChordLyricsPair(chordLyricsPair) {
        return {
            type: $1c14afc274b727b7$var$CHORD_LYRICS_PAIR,
            chords: chordLyricsPair.chords,
            lyrics: chordLyricsPair.lyrics
        };
    }
    serializeTernary(ternary) {
        return {
            type: $1c14afc274b727b7$var$TERNARY,
            variable: ternary.variable,
            valueTest: ternary.valueTest,
            trueExpression: this.serializeExpression(ternary.trueExpression),
            falseExpression: this.serializeExpression(ternary.falseExpression)
        };
    }
    serializeLiteral(literal) {
        return literal.string;
    }
    serializeExpression(expression) {
        return expression?.map((part)=>this.serializeItem(part));
    }
    /**
   * Deserializes a song that has been serialized using {@link serialize}
   * @param {object} serializedSong The serialized song
   * @returns {Song} The deserialized song
   */ deserialize(serializedSong) {
        this.parseAstComponent(serializedSong);
        return this.song;
    }
    parseAstComponent(astComponent) {
        if (!astComponent) return null;
        if (typeof astComponent === "string") return new (0, $e1378a714a1834c5$export$2e2bcd8739ae039)(astComponent);
        const { type: type  } = astComponent;
        switch(type){
            case $1c14afc274b727b7$var$CHORD_SHEET:
                return this.parseChordSheet(astComponent);
            case $1c14afc274b727b7$var$CHORD_LYRICS_PAIR:
                return this.parseChordLyricsPair(astComponent);
            case $1c14afc274b727b7$var$TAG:
                return this.parseTag(astComponent);
            case $1c14afc274b727b7$var$COMMENT:
                return this.parseComment(astComponent);
            case $1c14afc274b727b7$var$TERNARY:
                return this.parseTernary(astComponent);
            default:
                console.warn(`Unhandled AST component "${type}"`, astComponent);
        }
        return null;
    }
    parseChordSheet(astComponent) {
        const { lines: lines  } = astComponent;
        this.song = new (0, $6f653df65dfdf4ef$export$2e2bcd8739ae039)();
        lines.forEach((line)=>this.parseLine(line));
    }
    parseLine(astComponent) {
        const { items: items  } = astComponent;
        this.song.addLine();
        items.forEach((item)=>{
            const parsedItem = this.parseAstComponent(item);
            this.song.addItem(parsedItem);
        });
    }
    parseChordLyricsPair(astComponent) {
        const { chords: chords , lyrics: lyrics  } = astComponent;
        return new (0, $d454f4215ba01af2$export$2e2bcd8739ae039)(chords, lyrics);
    }
    parseTag(astComponent) {
        const { name: name , value: value , location: { offset: offset = null , line: line = null , column: column = null  } = {} ,  } = astComponent;
        return new (0, $5e9ede69210ec54a$export$2e2bcd8739ae039)(name, value, {
            line: line,
            column: column,
            offset: offset
        });
    }
    parseComment(astComponent) {
        const { comment: comment  } = astComponent;
        return new (0, $2115988b22311cb1$export$2e2bcd8739ae039)(comment);
    }
    parseTernary(astComponent) {
        const { variable: variable , valueTest: valueTest , trueExpression: trueExpression , falseExpression: falseExpression , location: { offset: offset = null , line: line = null , column: column = null  } = {} ,  } = astComponent;
        return new (0, $b6d84b168638423d$export$2e2bcd8739ae039)({
            variable: variable,
            valueTest: valueTest,
            trueExpression: this.parseExpression(trueExpression),
            falseExpression: this.parseExpression(falseExpression),
            offset: offset,
            line: line,
            column: column
        });
    }
    parseExpression(expression) {
        const parsedParts = (expression || []).map((part)=>this.parseAstComponent(part));
        return (0, $21a34a464e7bc609$export$ed9b06b5ee264ad3)(parsedParts);
    }
}
var $1c14afc274b727b7$export$2e2bcd8739ae039 = $1c14afc274b727b7$var$ChordSheetSerializer;


/**
 * Parses a ChordPro chord sheet
 */ class $4f0048d666582440$var$ChordProParser {
    /**
   * Parses a ChordPro chord sheet into a song
   * @param {string} chordProChordSheet the ChordPro chord sheet
   * @returns {Song} The parsed song
   */ parse(chordProChordSheet) {
        const ast = (0, $1a506a341538d943$export$98e6a39c04603d36)(chordProChordSheet);
        this.song = new (0, $1c14afc274b727b7$export$2e2bcd8739ae039)().deserialize(ast);
        return this.song;
    }
    /**
   * All warnings raised during parsing the ChordPro chord sheet
   * @member
   * @type {ParserWarning[]}
   */ get warnings() {
        return this.song.warnings;
    }
}
var $4f0048d666582440$export$2e2bcd8739ae039 = $4f0048d666582440$var$ChordProParser;



const $c049675f48c823b2$var$WHITE_SPACE = /\s/;
const $c049675f48c823b2$var$CHORD_LINE_REGEX = /^\s*((([A-G])(#|b)?([^/\s]*)(\/([A-G])(#|b)?)?)(\s|$)+)+(\s|$)+/;
/**
 * Parses a normal chord sheet
 */ class $c049675f48c823b2$var$ChordSheetParser {
    processingText = true;
    preserveWhitespace = true;
    lines = [];
    currentLine = 0;
    lineCount = 0;
    /**
   * Instantiate a chord sheet parser
   * @param {Object} [options={}] options
   * @param {boolean} [options.preserveWhitespace=true] whether to preserve trailing whitespace for chords
   */ constructor({ preserveWhitespace: preserveWhitespace = true  } = {}){
        this.preserveWhitespace = preserveWhitespace === true;
    }
    /**
   * Parses a chord sheet into a song
   * @param {string} chordSheet The ChordPro chord sheet
   * @param {Object} [options={}] Optional parser options
   * @param {Song} [options.song=null] The {@link Song} to store the song data in
   * @returns {Song} The parsed song
   */ parse(chordSheet, { song: song = null  } = {}) {
        this.initialize(chordSheet, {
            song: song
        });
        while(this.hasNextLine()){
            const line = this.readLine();
            this.parseLine(line);
        }
        this.endOfSong();
        return this.song;
    }
    endOfSong() {}
    parseLine(line) {
        this.songLine = this.song.addLine();
        if (line.trim().length === 0) this.chordLyricsPair = null;
        else this.parseNonEmptyLine(line);
    }
    parseNonEmptyLine(line) {
        this.chordLyricsPair = this.songLine.addChordLyricsPair();
        if ($c049675f48c823b2$var$CHORD_LINE_REGEX.test(line) && this.hasNextLine()) {
            const nextLine = this.readLine();
            this.parseLyricsWithChords(line, nextLine);
        } else this.chordLyricsPair.lyrics = `${line}`;
    }
    initialize(document, { song: song = null  } = {}) {
        this.song = song || new (0, $6f653df65dfdf4ef$export$2e2bcd8739ae039)();
        this.lines = document.split("\n");
        this.currentLine = 0;
        this.lineCount = this.lines.length;
        this.processingText = true;
    }
    readLine() {
        const line = this.lines[this.currentLine];
        this.currentLine += 1;
        return line;
    }
    hasNextLine() {
        return this.currentLine < this.lineCount;
    }
    parseLyricsWithChords(chordsLine, lyricsLine) {
        this.processCharacters(chordsLine, lyricsLine);
        this.chordLyricsPair.lyrics += lyricsLine.substring(chordsLine.length);
        this.chordLyricsPair.chords = this.chordLyricsPair.chords.trim();
        this.chordLyricsPair.lyrics = this.chordLyricsPair.lyrics.trim();
        if (!lyricsLine.trim().length) this.songLine = this.song.addLine();
    }
    processCharacters(chordsLine, lyricsLine) {
        for(let c = 0, charCount = chordsLine.length; c < charCount; c += 1){
            const chr = chordsLine[c];
            const nextChar = chordsLine[c + 1];
            const isWhiteSpace = $c049675f48c823b2$var$WHITE_SPACE.test(chr);
            this.addCharacter(chr, nextChar);
            this.chordLyricsPair.lyrics += lyricsLine[c] || "";
            this.processingText = !isWhiteSpace;
        }
    }
    addCharacter(chr, nextChar) {
        const isWhiteSpace = $c049675f48c823b2$var$WHITE_SPACE.test(chr);
        if (!isWhiteSpace) this.ensureChordLyricsPairInitialized();
        if (!isWhiteSpace || this.shouldAddCharacterToChords(nextChar)) this.chordLyricsPair.chords += chr;
    }
    shouldAddCharacterToChords(nextChar) {
        return nextChar && $c049675f48c823b2$var$WHITE_SPACE.test(nextChar) && this.preserveWhitespace;
    }
    ensureChordLyricsPairInitialized() {
        if (!this.processingText) {
            this.chordLyricsPair = this.songLine.addChordLyricsPair();
            this.processingText = true;
        }
    }
}
var $c049675f48c823b2$export$2e2bcd8739ae039 = $c049675f48c823b2$var$ChordSheetParser;





const $db9c80925e255cd2$var$VERSE_LINE_REGEX = /^\[Verse.*]/;
const $db9c80925e255cd2$var$CHORUS_LINE_REGEX = /^\[Chorus]/;
const $db9c80925e255cd2$var$OTHER_METADATA_LINE_REGEX = /^\[([^\]]+)]/;
const $db9c80925e255cd2$var$startSectionTags = {
    [(0, $af8d31735c159a26$export$4b194284baed1659)]: (0, $5e9ede69210ec54a$export$deca399f8cd9b7dc),
    [(0, $af8d31735c159a26$export$8db6c706fc9142b2)]: (0, $5e9ede69210ec54a$export$4f5168acae064e01)
};
const $db9c80925e255cd2$var$endSectionTags = {
    [(0, $af8d31735c159a26$export$4b194284baed1659)]: (0, $5e9ede69210ec54a$export$640d294ab83f9040),
    [(0, $af8d31735c159a26$export$8db6c706fc9142b2)]: (0, $5e9ede69210ec54a$export$473c1a4819e5180b)
};
/**
 * Parses an Ultimate Guitar chord sheet with metadata
 * Inherits from {@link ChordSheetParser}
 */ class $db9c80925e255cd2$var$UltimateGuitarParser extends (0, $c049675f48c823b2$export$2e2bcd8739ae039) {
    parseLine(line) {
        if (this.isSectionEnd()) this.endSection();
        if ($db9c80925e255cd2$var$VERSE_LINE_REGEX.test(line)) {
            this.startNewLine();
            this.startSection((0, $af8d31735c159a26$export$4b194284baed1659));
        } else if ($db9c80925e255cd2$var$CHORUS_LINE_REGEX.test(line)) {
            this.startNewLine();
            this.startSection((0, $af8d31735c159a26$export$8db6c706fc9142b2));
        } else if ($db9c80925e255cd2$var$OTHER_METADATA_LINE_REGEX.test(line)) {
            this.startNewLine();
            this.endSection();
            const comment = line.match($db9c80925e255cd2$var$OTHER_METADATA_LINE_REGEX)[1];
            this.songLine.addTag(new (0, $5e9ede69210ec54a$export$2e2bcd8739ae039)((0, $5e9ede69210ec54a$export$a29989082612d0d9), comment));
        } else super.parseLine(line);
    }
    isSectionEnd() {
        return this.songLine && this.songLine.isEmpty() && this.song.previousLine && !this.song.previousLine.isEmpty();
    }
    endOfSong() {
        super.endOfSong();
        if (this.currentSectionType in $db9c80925e255cd2$var$endSectionTags) this.startNewLine();
        this.endSection({
            addNewLine: false
        });
    }
    startSection(sectionType) {
        if (this.currentSectionType) this.endSection();
        this.currentSectionType = sectionType;
        this.song.setCurrentLineType(sectionType);
        if (sectionType in $db9c80925e255cd2$var$startSectionTags) this.song.addTag(new (0, $5e9ede69210ec54a$export$2e2bcd8739ae039)($db9c80925e255cd2$var$startSectionTags[sectionType]));
    }
    endSection({ addNewLine: addNewLine = true  } = {}) {
        if (this.currentSectionType in $db9c80925e255cd2$var$endSectionTags) {
            this.song.addTag(new (0, $5e9ede69210ec54a$export$2e2bcd8739ae039)($db9c80925e255cd2$var$endSectionTags[this.currentSectionType]));
            if (addNewLine) this.startNewLine();
        }
        this.song.setCurrentLineType((0, $af8d31735c159a26$export$c53d0f541b41b88e));
        this.currentSectionType = null;
    }
    startNewLine() {
        this.songLine = this.song.addLine();
    }
}
var $db9c80925e255cd2$export$2e2bcd8739ae039 = $db9c80925e255cd2$var$UltimateGuitarParser;



class $71c330be198ce421$var$MetadataConfiguration {
    constructor({ separator: separator  }){
        this.separator = separator;
    }
}
var $71c330be198ce421$export$2e2bcd8739ae039 = $71c330be198ce421$var$MetadataConfiguration;


class $bbcfd2c49e8e9957$var$Configuration {
    constructor({ evaluate: evaluate = false , metadata: metadata = {
        separator: ","
    }  }){
        this.evaluate = evaluate;
        this.metadata = new (0, $71c330be198ce421$export$2e2bcd8739ae039)(metadata);
    }
    get(key) {
        return (0, ($parcel$interopDefault($988mA$lodashget)))(this, key);
    }
}
var $bbcfd2c49e8e9957$export$2e2bcd8739ae039 = $bbcfd2c49e8e9957$var$Configuration;


/**
 * Base class for all formatters, taking care of receiving a configuration wrapping that inside a Configuration object
 */ class $0055ecb09272ba2d$var$Formatter {
    /**
     * Instantiate
     * @param {Object} [configuration={}] options
     * @param {boolean} [configuration.evaluate=false] Whether or not to evaluate meta expressions. For more info about
     * meta expressions, see: https://bit.ly/2SC9c2u
     * @param {object} [configuration.metadata={}]
     * @param {string} [configuration.metadata.separator=", "] The separator to be used when rendering a metadata value
     * that has multiple values. See: https://bit.ly/2SC9c2u
     */ constructor(configuration = {}){
        this.configuration = new (0, $bbcfd2c49e8e9957$export$2e2bcd8739ae039)(configuration);
    }
}
var $0055ecb09272ba2d$export$2e2bcd8739ae039 = $0055ecb09272ba2d$var$Formatter;







var $37d1d6d5b59826cf$exports = {};
$37d1d6d5b59826cf$exports = JSON.parse('{"majorKeys":["A","Bb","B","C","C#","Db","D","Eb","E","F","F#","Gb","G","G#","Ab"],"minorKeys":["F#m","Gm","G#m","Am","Bbm","Bm","Cm","C#m","Dm","D#m","Ebm","Em","Fm"],"capos":{"Bb":{"1":"A","3":"G","6":"E","8":"D","10":"C"},"D":{"2":"C","5":"A","7":"G","10":"E"},"Eb":{"1":"D","3":"C","6":"A","8":"G"},"Db":{"1":"C","4":"A","6":"G","9":"E"},"C#":{"1":"C","4":"A","6":"G","9":"E"},"E":{"2":"D","4":"C","7":"A","9":"G"},"F":{"1":"E","3":"D","5":"C","6":"B","8":"A","10":"G"},"F#":{"2":"E","4":"D","6":"C","7":"B","9":"A"},"Gb":{"2":"E","4":"D","6":"C","7":"B","9":"A"},"G":{"3":"E","5":"D","7":"C","8":"B","10":"A"},"G#":{"1":"G","4":"E","6":"D","8":"C"},"Ab":{"1":"G","4":"E","6":"D","8":"C"},"A":{"2":"G","5":"E","7":"D","9":"C"},"B":{"2":"A","4":"G","7":"E","9":"D"},"C":{"3":"A","5":"G","8":"E","10":"D"},"Am":{"3":"F#m","5":"Em","7":"Dm"},"Bbm":{"1":"Am","4":"F#m","6":"Em","8":"Dm"},"Bm":{"2":"Am","5":"F#m","7":"Em"},"Cm":{"1":"Bm","3":"Am","6":"F#m","8":"Em"},"C#m":{"2":"Bm","4":"Am","7":"F#m","9":"Em"},"Dm":{"3":"Bm","5":"Am","8":"F#m"},"Ebm":{"1":"Dm","4":"Bm","6":"Am"},"D#m":{"1":"Dm","4":"Bm","6":"Am"}}}');


function $dfecd32049fa58e9$export$fd31a53e6281557e(transposeKey, songKey) {
    if (/^\d+$/.test(transposeKey)) return parseInt(transposeKey, 10);
    return (0, $bff5407e03fdc8ee$export$2e2bcd8739ae039).distance(songKey, transposeKey);
}
function $dfecd32049fa58e9$var$chordTransposeDistance(capo, transposeKey, songKey) {
    let transpose = -1 * (capo || 0);
    if ((0, $21a34a464e7bc609$export$ee27c052bca048fb)(transposeKey) && (0, $21a34a464e7bc609$export$ee27c052bca048fb)(songKey)) transpose += $dfecd32049fa58e9$export$fd31a53e6281557e(transposeKey, songKey);
    return transpose;
}
function $dfecd32049fa58e9$export$596ec52955da9472(chord, lineKey, transposeKey, song) {
    let chordObj = (0, $26f57998457eb2d4$export$2e2bcd8739ae039).parse(chord);
    const { capo: capo , key: songKey  } = song;
    if (!chordObj) return chord;
    chordObj = chordObj.transpose($dfecd32049fa58e9$var$chordTransposeDistance(capo, transposeKey, songKey));
    if ((0, $21a34a464e7bc609$export$ee27c052bca048fb)(transposeKey)) chordObj = chordObj.useModifier(transposeKey.modifier);
    if ((0, $21a34a464e7bc609$export$ee27c052bca048fb)(lineKey)) chordObj = chordObj.normalize(lineKey);
    return chordObj.toString();
}
function $dfecd32049fa58e9$export$b07b16221c14aaa(key) {
    return (0, $37d1d6d5b59826cf$exports.capos)[(0, $bff5407e03fdc8ee$export$2e2bcd8739ae039).toString(key)];
}
function $dfecd32049fa58e9$export$74743eda5dda3ccf(key) {
    const keyObj = (0, $bff5407e03fdc8ee$export$2e2bcd8739ae039).wrap(key);
    return keyObj.isMinor() ? (0, $37d1d6d5b59826cf$exports.minorKeys) : (0, $37d1d6d5b59826cf$exports.majorKeys);
}







const $376e205ced98486b$export$17c9e635b932873b = (item)=>item instanceof (0, $d454f4215ba01af2$export$2e2bcd8739ae039);
const $376e205ced98486b$export$3db5961874282581 = (line)=>line.items.some((item)=>item.isRenderable());
const $376e205ced98486b$export$3bf645f08efe3292 = (item)=>item instanceof (0, $5e9ede69210ec54a$export$2e2bcd8739ae039);
const $376e205ced98486b$export$3ab01370f5e64ac8 = (item)=>item.name === "comment";
function $376e205ced98486b$export$6ea1b0eb82ead3f(string) {
    return string.trim().replace(/(<\/[a-z]+>)\s+(<)/g, "$1$2").replace(/(\n)\s+/g, "");
}
function $376e205ced98486b$export$79b2f7037acddd43(collection, callback) {
    return collection.map(callback).join("");
}
function $376e205ced98486b$export$a55877ca9db47377(condition, callback) {
    return condition ? callback() : "";
}
const $376e205ced98486b$export$b8d631d9200974fa = (line)=>line.items.some((item)=>item instanceof (0, $d454f4215ba01af2$export$2e2bcd8739ae039) && item.lyrics || item instanceof (0, $5e9ede69210ec54a$export$2e2bcd8739ae039) && item.isRenderable() || (0, $21a34a464e7bc609$export$e3f63561d52b936d)(item));
const $376e205ced98486b$export$8a559c16cc3576 = (line)=>{
    const classes = [
        "row"
    ];
    if (!$376e205ced98486b$export$3db5961874282581(line)) classes.push("empty-line");
    return classes.join(" ");
};
const $376e205ced98486b$export$dcd1550c9709312c = (paragraph)=>{
    const classes = [
        "paragraph"
    ];
    if (paragraph.type !== (0, $af8d31735c159a26$export$c5a6fe907430212e) && paragraph.type !== (0, $af8d31735c159a26$export$c53d0f541b41b88e)) classes.push(paragraph.type);
    return classes.join(" ");
};
const $376e205ced98486b$export$fef61f332f2c0afc = (item, metadata, configuration)=>{
    if (!metadata) throw new Error("cannot evaluate, metadata is null");
    return item.evaluate(metadata, configuration.get("metadata.separator"));
};



/**
 * Formats a song into a plain text chord sheet
 */ class $525b2331e4b0ed83$var$TextFormatter extends (0, $0055ecb09272ba2d$export$2e2bcd8739ae039) {
    /**
   * Formats a song into a plain text chord sheet
   * @param {Song} song The song to be formatted
   * @returns {string} the chord sheet
   */ format(song) {
        this.song = song;
        return [
            this.formatHeader(),
            this.formatParagraphs(), 
        ].join("");
    }
    formatHeader() {
        const { title: title , subtitle: subtitle  } = this.song;
        const separator = title || subtitle ? "\n" : "";
        return [
            this.formatTitle(title),
            this.formatSubTitle(subtitle),
            separator, 
        ].join("");
    }
    formatParagraphs() {
        const { bodyParagraphs: bodyParagraphs , metadata: metadata  } = this.song;
        return bodyParagraphs.map((paragraph)=>this.formatParagraph(paragraph, metadata)).join("\n\n");
    }
    formatParagraph(paragraph, metadata) {
        return paragraph.lines.filter((line)=>line.hasRenderableItems()).map((line)=>this.formatLine(line, metadata)).join("\n");
    }
    formatLine(line, metadata) {
        const parts = [
            this.formatLineTop(line),
            this.formatLineBottom(line, metadata), 
        ];
        return parts.filter((i)=>i !== null).map((part)=>part.trimRight()).join("\n");
    }
    formatTitle(title) {
        if (title) return `${title.toUpperCase()}\n`;
        return "";
    }
    formatSubTitle(subtitle) {
        if (subtitle) return `${subtitle}\n`;
        return "";
    }
    formatLineTop(line) {
        if ((0, $21a34a464e7bc609$export$d332d76d125f0cbe)(line)) return this.formatLineWithFormatter(line, this.formatItemTop);
        return null;
    }
    chordLyricsPairLength(chordLyricsPair, line) {
        const chords = (0, $dfecd32049fa58e9$export$596ec52955da9472)(chordLyricsPair.chords, line.key, line.transposeKey, this.song);
        const { lyrics: lyrics  } = chordLyricsPair;
        const chordsLength = (chords || "").length;
        const lyricsLength = (lyrics || "").length;
        if (chordsLength >= lyricsLength) return chordsLength + 1;
        return Math.max(chordsLength, lyricsLength);
    }
    formatItemTop(item, metadata, line) {
        if (item instanceof (0, $5e9ede69210ec54a$export$2e2bcd8739ae039) && item.isRenderable()) return (0, $21a34a464e7bc609$export$bc3bea8325045070)("", item.value);
        if (item instanceof (0, $d454f4215ba01af2$export$2e2bcd8739ae039)) {
            const chords = (0, $dfecd32049fa58e9$export$596ec52955da9472)(item.chords, line.key, line.transposeKey, this.song);
            return (0, $21a34a464e7bc609$export$bc3bea8325045070)(chords, this.chordLyricsPairLength(item, line));
        }
        return "";
    }
    formatLineBottom(line, metadata) {
        if ((0, $376e205ced98486b$export$b8d631d9200974fa)(line)) return this.formatLineWithFormatter(line, this.formatItemBottom, metadata);
        return null;
    }
    formatLineWithFormatter(line, formatter, metadata = null) {
        return line.items.map((item)=>formatter.call(this, item, metadata, line)).join("");
    }
    formatItemBottom(item, metadata, line) {
        if (item instanceof (0, $5e9ede69210ec54a$export$2e2bcd8739ae039) && item.isRenderable()) return item.value;
        if (item instanceof (0, $d454f4215ba01af2$export$2e2bcd8739ae039)) return (0, $21a34a464e7bc609$export$bc3bea8325045070)(item.lyrics, this.chordLyricsPairLength(item, line));
        if (typeof item.evaluate === "function") return item.evaluate(metadata, this.configuration.get("metadata.separator"));
        return "";
    }
}
var $525b2331e4b0ed83$export$2e2bcd8739ae039 = $525b2331e4b0ed83$var$TextFormatter;



/**
 * Acts as a base class for HTML formatters, taking care of whitelisting prototype property access.
 */ class $d834af97c9a2e4df$var$HtmlFormatter extends (0, $0055ecb09272ba2d$export$2e2bcd8739ae039) {
    formatWithTemplate(song, template) {
        return template({
            song: song,
            configuration: this.configuration
        });
    }
}
var $d834af97c9a2e4df$export$2e2bcd8739ae039 = $d834af97c9a2e4df$var$HtmlFormatter;





var $5381a6b1b90601c7$export$2e2bcd8739ae039 = ({ configuration: configuration , song: song , renderBlankLines: renderBlankLines = false , song: { title: title , subtitle: subtitle , bodyParagraphs: bodyParagraphs , bodyLines: bodyLines , metadata: metadata ,  } ,  })=>(0, $376e205ced98486b$export$6ea1b0eb82ead3f)(`
  ${(0, $376e205ced98486b$export$a55877ca9db47377)(title, ()=>`<h1>${title}</h1>`)}
  ${(0, $376e205ced98486b$export$a55877ca9db47377)(subtitle, ()=>`<h2>${subtitle}</h2>`)}

  ${(0, $376e205ced98486b$export$a55877ca9db47377)(bodyLines.length > 0, ()=>`
    <div class="chord-sheet">
      ${(0, $376e205ced98486b$export$79b2f7037acddd43)(bodyParagraphs, (paragraph)=>`
        <div class="${(0, $376e205ced98486b$export$dcd1550c9709312c)(paragraph)}">
          ${(0, $376e205ced98486b$export$79b2f7037acddd43)(paragraph.lines, (line)=>`
            ${(0, $376e205ced98486b$export$a55877ca9db47377)(renderBlankLines || (0, $376e205ced98486b$export$3db5961874282581)(line), ()=>`
              <table class="${(0, $376e205ced98486b$export$8a559c16cc3576)(line)}">
                ${(0, $376e205ced98486b$export$a55877ca9db47377)((0, $21a34a464e7bc609$export$d332d76d125f0cbe)(line), ()=>`
                  <tr>
                    ${(0, $376e205ced98486b$export$79b2f7037acddd43)(line.items, (item)=>`
                      ${(0, $376e205ced98486b$export$a55877ca9db47377)((0, $376e205ced98486b$export$17c9e635b932873b)(item), ()=>`
                        <td class="chord">${(0, $dfecd32049fa58e9$export$596ec52955da9472)(item.chords, line.key, line.transposeKey, song)}</td>
                      `)}
                    `)}
                  </tr>
                `)}
                
                ${(0, $376e205ced98486b$export$a55877ca9db47377)((0, $376e205ced98486b$export$b8d631d9200974fa)(line), ()=>`
                  <tr>
                    ${(0, $376e205ced98486b$export$79b2f7037acddd43)(line.items, (item)=>`
                      ${(0, $376e205ced98486b$export$a55877ca9db47377)((0, $376e205ced98486b$export$17c9e635b932873b)(item), ()=>`
                        <td class="lyrics">${item.lyrics}</td>
                      `)}
                      
                      ${(0, $376e205ced98486b$export$a55877ca9db47377)((0, $376e205ced98486b$export$3bf645f08efe3292)(item) && (0, $376e205ced98486b$export$3ab01370f5e64ac8)(item), ()=>`
                        <td class="comment">${item.value}</td>
                      `)}
                      
                      ${(0, $376e205ced98486b$export$a55877ca9db47377)((0, $21a34a464e7bc609$export$e3f63561d52b936d)(item), ()=>`
                        <td class="lyrics">${(0, $376e205ced98486b$export$fef61f332f2c0afc)(item, metadata, configuration)}</td>
                      `)}
                    `)}
                  </tr>
                `)}
              </table>
            `)}
          `)}
        </div>
      `)}
    </div>
  `)}
`);



const $5b02ea769c63fd56$export$200cf2de69532aa8 = {
    h1: {
        fontSize: "1.5em"
    },
    h2: {
        fontSize: "1.1em"
    },
    table: {
        borderSpacing: "0",
        color: "inherit"
    },
    td: {
        padding: "3px 0"
    },
    ".chord:not(:last-child)": {
        paddingRight: "10px"
    },
    ".paragraph": {
        marginBottom: "1em"
    }
};
function $5b02ea769c63fd56$export$aa5b6043dd05348b(scope) {
    return (0, $21a34a464e7bc609$export$59d377d2a2e0150a)($5b02ea769c63fd56$export$200cf2de69532aa8, scope);
}
/**
 * Formats a song into HTML. It uses TABLEs to align lyrics with chords, which makes the HTML for things like
 * PDF conversion.
 */ class $5b02ea769c63fd56$var$HtmlTableFormatter extends (0, $d834af97c9a2e4df$export$2e2bcd8739ae039) {
    /**
   * Formats a song into HTML.
   * @param {Song} song The song to be formatted
   * @returns {string} The HTML string
   */ format(song) {
        return this.formatWithTemplate(song, (0, $5381a6b1b90601c7$export$2e2bcd8739ae039));
    }
    /**
   * Generates basic CSS, optionally scoped within the provided selector, to use with output generated by
   * {@link HtmlTableFormatter}
   *
   * For example, execute cssString('.chordSheetViewer') will result in CSS like:
   *
   *     .chordSheetViewer .paragraph {
   *       margin-bottom: 1em;
   *     }
   *
   * @param scope the CSS scope to use, for example `.chordSheetViewer`
   * @returns {string} the CSS string
   */ static cssString(scope = "") {
        return (0, $21a34a464e7bc609$export$59d377d2a2e0150a)($5b02ea769c63fd56$export$200cf2de69532aa8, scope);
    }
    /**
   * Basic CSS, in object style à la useStyles, to use with output generated by {@link HtmlTableFormatter}
   * For a CSS string see {@link cssString}
   *
   * Example:
   *
   *     '.paragraph': {
   *       marginBottom: '1em'
   *     }
   *
   * @return {Object.<string, Object.<string, string>>} the CSS object
   */ static cssObject() {
        return $5b02ea769c63fd56$export$200cf2de69532aa8;
    }
}
var $5b02ea769c63fd56$export$2e2bcd8739ae039 = $5b02ea769c63fd56$var$HtmlTableFormatter;





var $93f055b77b2d269f$export$2e2bcd8739ae039 = ({ configuration: configuration , song: song , renderBlankLines: renderBlankLines = false , song: { title: title , subtitle: subtitle , bodyParagraphs: bodyParagraphs , metadata: metadata ,  } ,  })=>(0, $376e205ced98486b$export$6ea1b0eb82ead3f)(`
  ${(0, $376e205ced98486b$export$a55877ca9db47377)(title, ()=>`<h1>${title}</h1>`)}
  ${(0, $376e205ced98486b$export$a55877ca9db47377)(subtitle, ()=>`<h2>${subtitle}</h2>`)}
  
  <div class="chord-sheet">
    ${(0, $376e205ced98486b$export$79b2f7037acddd43)(bodyParagraphs, (paragraph)=>`
      <div class="${(0, $376e205ced98486b$export$dcd1550c9709312c)(paragraph)}">
        ${(0, $376e205ced98486b$export$79b2f7037acddd43)(paragraph.lines, (line)=>`
          ${(0, $376e205ced98486b$export$a55877ca9db47377)(renderBlankLines || (0, $376e205ced98486b$export$3db5961874282581)(line), ()=>`
            <div class="${(0, $376e205ced98486b$export$8a559c16cc3576)(line)}">
              ${(0, $376e205ced98486b$export$79b2f7037acddd43)(line.items, (item)=>`
                ${(0, $376e205ced98486b$export$a55877ca9db47377)((0, $376e205ced98486b$export$17c9e635b932873b)(item), ()=>`
                  <div class="column">
                    <div class="chord">${(0, $dfecd32049fa58e9$export$596ec52955da9472)(item.chords, line.key, line.transposeKey, song)}</div>
                    <div class="lyrics">${item.lyrics}</div>
                  </div>
                `)}
                
                ${(0, $376e205ced98486b$export$a55877ca9db47377)((0, $376e205ced98486b$export$3bf645f08efe3292)(item) && (0, $376e205ced98486b$export$3ab01370f5e64ac8)(item), ()=>`<div class="comment">${item.value}</div>`)}
                
                ${(0, $376e205ced98486b$export$a55877ca9db47377)((0, $21a34a464e7bc609$export$e3f63561d52b936d)(item), ()=>`
                  <div class="column">
                    <div class="chord"></div>
                    <div class="lyrics">${(0, $376e205ced98486b$export$fef61f332f2c0afc)(item, metadata, configuration)}</div>
                  </div>
                `)}
              `)}
            </div>
          `)}
        `)}
      </div>
    `)}
  </div>
`);



const $ee0c149cc33dc156$var$defaultCss = {
    ".chord:not(:last-child)": {
        paddingRight: "10px"
    },
    ".paragraph": {
        marginBottom: "1em"
    },
    ".row": {
        display: "flex"
    },
    ".chord:after": {
        content: "'\\200b'"
    },
    ".lyrics:after": {
        content: "'\\200b'"
    }
};
/**
 * Formats a song into HTML. It uses DIVs to align lyrics with chords, which makes it useful for responsive web pages.
 */ class $ee0c149cc33dc156$var$HtmlDivFormatter extends (0, $d834af97c9a2e4df$export$2e2bcd8739ae039) {
    /**
   * Formats a song into HTML.
   * @param {Song} song The song to be formatted
   * @returns {string} The HTML string
   */ format(song) {
        return this.formatWithTemplate(song, (0, $93f055b77b2d269f$export$2e2bcd8739ae039));
    }
    /**
   * Generates basic CSS, optionally scoped within the provided selector, to use with output generated by
   * {@link HtmlDivFormatter}
   *
   * For example, execute cssString('.chordSheetViewer') will result in CSS like:
   *
   *     .chordSheetViewer .paragraph {
   *       margin-bottom: 1em;
   *     }
   *
   * @param scope the CSS scope to use, for example `.chordSheetViewer`
   * @returns {string} the CSS string
   */ static cssString(scope = "") {
        return (0, $21a34a464e7bc609$export$59d377d2a2e0150a)($ee0c149cc33dc156$var$defaultCss, scope);
    }
    /**
   * Basic CSS, in object style à la useStyles, to use with output generated by {@link HtmlDivFormatter}
   *
   * Example:
   *
   *     '.paragraph': {
   *       marginBottom: '1em'
   *     }
   *
   * For a CSS string see {@link cssString}
   * @return {Object.<string, Object.<string, string>>} the CSS object
   */ static cssObject() {
        return $ee0c149cc33dc156$var$defaultCss;
    }
}
var $ee0c149cc33dc156$export$2e2bcd8739ae039 = $ee0c149cc33dc156$var$HtmlDivFormatter;







const $b601b9602157ea5f$var$NEW_LINE = "\n";
/**
 * Formats a song into a ChordPro chord sheet
 */ class $b601b9602157ea5f$var$ChordProFormatter extends (0, $0055ecb09272ba2d$export$2e2bcd8739ae039) {
    /**
   * Formats a song into a ChordPro chord sheet.
   * @param {Song} song The song to be formatted
   * @returns {string} The ChordPro string
   */ format(song) {
        const { lines: lines , metadata: metadata  } = song;
        return lines.map((line)=>this.formatLine(line, metadata)).join($b601b9602157ea5f$var$NEW_LINE);
    }
    formatLine(line, metadata) {
        return line.items.map((item)=>this.formatItem(item, metadata)).join("");
    }
    formatItem(item, metadata) {
        if (item instanceof (0, $5e9ede69210ec54a$export$2e2bcd8739ae039)) return this.formatTag(item);
        if (item instanceof (0, $d454f4215ba01af2$export$2e2bcd8739ae039)) return this.formatChordLyricsPair(item);
        if (typeof item.evaluate === "function") return this.formatOrEvaluateItem(item, metadata);
        throw new Error(`Don't know how to format a ${item.constructor.name}`);
    }
    formatOrEvaluateItem(item, metadata) {
        if (this.configuration.evaluate) return item.evaluate(metadata, this.configuration.get("metadata.separator"));
        if (item instanceof (0, $b6d84b168638423d$export$2e2bcd8739ae039)) return this.formatTernary(item);
        if (item instanceof (0, $e1378a714a1834c5$export$2e2bcd8739ae039)) return item.evaluate();
        throw new Error(`Don't know how to format a ${item.constructor.name}`);
    }
    formatTernary(ternary) {
        const { variable: variable , valueTest: valueTest , trueExpression: trueExpression , falseExpression: falseExpression ,  } = ternary;
        return [
            "%{",
            variable || "",
            this.formatValueTest(valueTest),
            this.formatExpressionRange(trueExpression),
            this.formatExpressionRange(falseExpression),
            "}", 
        ].join("");
    }
    formatValueTest(valueTest) {
        if (!valueTest) return "";
        return `=${valueTest}`;
    }
    formatExpressionRange(expressionRange) {
        if (!expressionRange) return "";
        return `|${expressionRange.map((expression)=>this.formatExpression(expression)).join("")}`;
    }
    formatExpression(expression) {
        if (expression instanceof (0, $b6d84b168638423d$export$2e2bcd8739ae039)) return this.formatTernary(expression);
        if (expression instanceof (0, $e1378a714a1834c5$export$2e2bcd8739ae039)) return expression.string;
        return "";
    }
    formatTag(tag) {
        if (tag.hasValue()) return `{${tag.originalName}: ${tag.value}}`;
        return `{${tag.originalName}}`;
    }
    formatChordLyricsPair(chordLyricsPair) {
        return [
            this.formatChordLyricsPairChords(chordLyricsPair),
            this.formatChordLyricsPairLyrics(chordLyricsPair), 
        ].join("");
    }
    formatChordLyricsPairChords(chordLyricsPair) {
        if (chordLyricsPair.chords) return `[${chordLyricsPair.chords}]`;
        return "";
    }
    formatChordLyricsPairLyrics(chordLyricsPair) {
        return chordLyricsPair.lyrics || "";
    }
}
var $b601b9602157ea5f$export$2e2bcd8739ae039 = $b601b9602157ea5f$var$ChordProFormatter;



































var $882b6d93070905b3$export$2e2bcd8739ae039 = {
    ChordProParser: $4f0048d666582440$export$2e2bcd8739ae039,
    ChordSheetParser: $c049675f48c823b2$export$2e2bcd8739ae039,
    UltimateGuitarParser: $db9c80925e255cd2$export$2e2bcd8739ae039,
    TextFormatter: $525b2331e4b0ed83$export$2e2bcd8739ae039,
    HtmlTableFormatter: $5b02ea769c63fd56$export$2e2bcd8739ae039,
    HtmlDivFormatter: $ee0c149cc33dc156$export$2e2bcd8739ae039,
    ChordProFormatter: $b601b9602157ea5f$export$2e2bcd8739ae039,
    ChordLyricsPair: $d454f4215ba01af2$export$2e2bcd8739ae039,
    Line: $bc411321e9739719$export$2e2bcd8739ae039,
    Song: $6f653df65dfdf4ef$export$2e2bcd8739ae039,
    Tag: $5e9ede69210ec54a$export$2e2bcd8739ae039,
    Comment: $2115988b22311cb1$export$2e2bcd8739ae039,
    Metadata: $1406c61233580008$export$2e2bcd8739ae039,
    Paragraph: $0c3420c6a3e8a9d7$export$2e2bcd8739ae039,
    Ternary: $b6d84b168638423d$export$2e2bcd8739ae039,
    Composite: $812df3771838671d$export$2e2bcd8739ae039,
    Literal: $e1378a714a1834c5$export$2e2bcd8739ae039,
    ChordSheetSerializer: $1c14afc274b727b7$export$2e2bcd8739ae039,
    CHORUS: $af8d31735c159a26$export$8db6c706fc9142b2,
    INDETERMINATE: $af8d31735c159a26$export$c5a6fe907430212e,
    TAB: $af8d31735c159a26$export$f1c9dd0f5207dd5e,
    VERSE: $af8d31735c159a26$export$4b194284baed1659,
    NONE: $af8d31735c159a26$export$c53d0f541b41b88e
};




},{"lodash.get":2}],2:[function(require,module,exports){
(function (global){(function (){
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])(1)
});
