/* --------------------------------------------------------------------------------------------
 * Copyright (c) Red Hat
 * Licensed under the Apache-2.0 License. See License.txt in the project root for 
 * license information.
 * ------------------------------------------------------------------------------------------ */
'use strict';

/**
 * Represents the global configuration settings.
 */
class Config
{
    triggerFullStackAnalysis:                       string;
    triggerRHRepositoryRecommendationNotification:  string;
    telemetryId:                                    string;
    utmSource:                                      string;
    exhortSnykToken:                                string;
    matchManifestVersions:                          string;
    exhortMvnPath:                                  string;
    exhortNpmPath:                                  string;
    exhortGoPath:                                   string;
    exhortPython3Path:                              string;
    exhortPip3Path:                                 string;
    exhortPythonPath:                               string;
    exhortPipPath:                                  string;

    /**
     * Initializes a new instance of the Config class with default values from the parent process environment variable data.
     */
    constructor() {
        this.triggerFullStackAnalysis = process.env.VSCEXT_TRIGGER_FULL_STACK_ANALYSIS || '';
        this.triggerRHRepositoryRecommendationNotification = process.env.VSCEXT_TRIGGER_REDHAT_REPOSITORY_RECOMMENDATION_NOTIFICATION || '';
        this.telemetryId = process.env.VSCEXT_TELEMETRY_ID || '';
        this.utmSource = process.env.VSCEXT_UTM_SOURCE || '';
        this.exhortSnykToken = process.env.VSCEXT_EXHORT_SNYK_TOKEN || '';
        this.matchManifestVersions = process.env.VSCEXT_MATCH_MANIFEST_VERSIONS || 'true';
        this.exhortMvnPath = process.env.VSCEXT_EXHORT_MVN_PATH || 'mvn';
        this.exhortNpmPath = process.env.VSCEXT_EXHORT_NPM_PATH || 'npm';
        this.exhortGoPath = process.env.VSCEXT_EXHORT_GO_PATH || 'go';
        this.exhortPython3Path = process.env.VSCEXT_EXHORT_PYTHON3_PATH || 'python3';
        this.exhortPip3Path = process.env.VSCEXT_EXHORT_PIP3_PATH || 'pip3';
        this.exhortPythonPath = process.env.VSCEXT_EXHORT_PYTHON_PATH || 'python';
        this.exhortPipPath = process.env.VSCEXT_EXHORT_PIP_PATH || 'pip';
    }

    /**
     * Updates the global configuration with provided data from extension workspace settings.
     * @param data - The data from extension workspace settings to update the global configuration with.
     */
    updateConfig( data: any ) {
        const rhdaData = data.redHatDependencyAnalytics;

        this.exhortSnykToken = rhdaData.exhortSnykToken;
        this.matchManifestVersions = rhdaData.matchManifestVersions ? 'true' : 'false';
        this.exhortMvnPath = rhdaData.mvn.executable.path || 'mvn';
        this.exhortNpmPath = rhdaData.npm.executable.path || 'npm';
        this.exhortGoPath = rhdaData.go.executable.path || 'go';
        this.exhortPython3Path = rhdaData.python3.executable.path || 'python3';
        this.exhortPip3Path = rhdaData.pip3.executable.path || 'pip3';
        this.exhortPythonPath = rhdaData.python.executable.path || 'python';
        this.exhortPipPath = rhdaData.pip.executable.path || 'pip';
    }
}

/**
 * Represents the global configuration instance based on Config class.
 */
const globalConfig = new Config();

export { Config, globalConfig };
