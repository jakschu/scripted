/*******************************************************************************
 * @license
 * Copyright (c) 2012 VMware, Inc. All Rights Reserved.
 * THIS FILE IS PROVIDED UNDER THE TERMS OF THE ECLIPSE PUBLIC LICENSE
 * ("AGREEMENT"). ANY USE, REPRODUCTION OR DISTRIBUTION OF THIS FILE
 * CONSTITUTES RECIPIENTS ACCEPTANCE OF THE AGREEMENT.
 * You can obtain a current copy of the Eclipse Public License from
 * http://www.opensource.org/licenses/eclipse-1.0.php
 *
 * Contributors:
 *    Andrew Eisenberg - refactoring for a more consistent approach to navigation
 ******************************************************************************/
/**
 * this module provides OS specific utilities
 */
 /*jslint browser:true */
define([], function() {
	
	function osName() {
		if (navigator.appVersion.indexOf("Win")!==-1) { return "windows"; }
		if (navigator.appVersion.indexOf("Mac")!==-1) { return "macos"; }
		if (navigator.appVersion.indexOf("X11")!==-1) { return "unix"; }
		if (navigator.appVersion.indexOf("Linux")!==-1) { return "linux"; }
		return 'unkown';
	}
	
	
	return {
		name: osName(),
		// this function is re-defined in many places.
		isMac : navigator.platform.indexOf("Mac") !== -1,
		isCtrlOrMeta : function(event) {
			return (this.isMac && event.metaKey) || (!this.isMac && event.ctrlKey);
		},
		pathsep : (osName() === 'windows' ? '\\' : '/')
	};
});