var path = require('path');

function _findResource(name, path){
	var extList = feather.config.get('component.ext', []);
	var info = feather.uri(name, path);

	for(var i = 0, len = extList.length; i < len && !info.file; i++){
		info = feather.uri(name + extList[i], path);
	}

	return info;
}

function findResource(name, dir){
	var list = [
		name,
		path.join(name, 'index'),
		path.join(name, path.basename(name))
	];
	var info;

	while(list.length){
		name = list.shift();
		info = _findResource(name, dir);

		if(info && info.file){
			break;
		}
	}

	return info;
}

function onFileLookUp(info, file){
	if(!info.file){
		resolved = findResource(info.rest, file ? file.dirname : feather.project.getProjectPath());

		if(resolved.file){
			info.id = resolved.file.getId();
			info.file = resolved.file;
		}
	}
}


module.exports = function(feather, opts){
	require('feather2-hook-components')(feather, opts);
	feather.on('lookup:file', onFileLookUp);
};