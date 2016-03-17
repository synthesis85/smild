"use strict";

const Task = require('../Task'),
    _ = require('lodash'),
    gulp = require('gulp'),
    Promise = require('bluebird');

class PostBuildTask extends Task {

    constructor(buildManager, taskRunner) {
        super(buildManager, taskRunner);
        this.command = "post-build";
        this.availableToModule = false;
    }

    action() {
        if (!this._buildManager.options.onPostBuild.length) return Promise.resolve();
        return this._taskRunner.run(_.map(this._buildManager.options.onPostBuild, task => task.action));
    }
}

module.exports = PostBuildTask;