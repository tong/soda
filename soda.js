// Generated by Haxe 4.0.0
(function ($global) { "use strict";
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var HxOverrides = function() { };
HxOverrides.__name__ = ["HxOverrides"];
HxOverrides.substr = function(s,pos,len) {
	if(len == null) {
		len = s.length;
	} else if(len < 0) {
		if(pos == 0) {
			len = s.length + len;
		} else {
			return "";
		}
	}
	return s.substr(pos,len);
};
Math.__name__ = ["Math"];
var Std = function() { };
Std.__name__ = ["Std"];
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
var StringTools = function() { };
StringTools.__name__ = ["StringTools"];
StringTools.endsWith = function(s,end) {
	var elen = end.length;
	var slen = s.length;
	if(slen >= elen) {
		return HxOverrides.substr(s,slen - elen,elen) == end;
	} else {
		return false;
	}
};
var Type = function() { };
Type.__name__ = ["Type"];
Type.getClassName = function(c) {
	var a = c.__name__;
	if(a == null) {
		return null;
	}
	return a.join(".");
};
var js__$Boot_HaxeError = function(val) {
	Error.call(this);
	this.val = val;
	this.message = String(val);
	if(Error.captureStackTrace) {
		Error.captureStackTrace(this,js__$Boot_HaxeError);
	}
};
js__$Boot_HaxeError.__name__ = ["js","_Boot","HaxeError"];
js__$Boot_HaxeError.wrap = function(val) {
	if((val instanceof Error)) {
		return val;
	} else {
		return new js__$Boot_HaxeError(val);
	}
};
js__$Boot_HaxeError.__super__ = Error;
js__$Boot_HaxeError.prototype = $extend(Error.prototype,{
	__class__: js__$Boot_HaxeError
});
var js_Boot = function() { };
js_Boot.__name__ = ["js","Boot"];
js_Boot.getClass = function(o) {
	if((o instanceof Array) && o.__enum__ == null) {
		return Array;
	} else {
		var cl = o.__class__;
		if(cl != null) {
			return cl;
		}
		var name = js_Boot.__nativeClassName(o);
		if(name != null) {
			return js_Boot.__resolveNativeClass(name);
		}
		return null;
	}
};
js_Boot.__string_rec = function(o,s) {
	if(o == null) {
		return "null";
	}
	if(s.length >= 5) {
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) {
		t = "object";
	}
	switch(t) {
	case "function":
		return "<function>";
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) {
					return o[0];
				}
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) {
						str += "," + js_Boot.__string_rec(o[i],s);
					} else {
						str += js_Boot.__string_rec(o[i],s);
					}
				}
				return str + ")";
			}
			var l = o.length;
			var i1;
			var str1 = "[";
			s += "\t";
			var _g11 = 0;
			var _g2 = l;
			while(_g11 < _g2) {
				var i2 = _g11++;
				str1 += (i2 > 0 ? "," : "") + js_Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				return s2;
			}
		}
		var k = null;
		var str2 = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str2.length != 2) {
			str2 += ", \n";
		}
		str2 += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str2 += "\n" + s + "}";
		return str2;
	case "string":
		return o;
	default:
		return String(o);
	}
};
js_Boot.__interfLoop = function(cc,cl) {
	if(cc == null) {
		return false;
	}
	if(cc == cl) {
		return true;
	}
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0;
		var _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js_Boot.__interfLoop(i1,cl)) {
				return true;
			}
		}
	}
	return js_Boot.__interfLoop(cc.__super__,cl);
};
js_Boot.__instanceof = function(o,cl) {
	if(cl == null) {
		return false;
	}
	switch(cl) {
	case Array:
		if((o instanceof Array)) {
			return o.__enum__ == null;
		} else {
			return false;
		}
		break;
	case Bool:
		return typeof(o) == "boolean";
	case Dynamic:
		return true;
	case Float:
		return typeof(o) == "number";
	case Int:
		if(typeof(o) == "number") {
			return (o|0) === o;
		} else {
			return false;
		}
		break;
	case String:
		return typeof(o) == "string";
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(o instanceof cl) {
					return true;
				}
				if(js_Boot.__interfLoop(js_Boot.getClass(o),cl)) {
					return true;
				}
			} else if(typeof(cl) == "object" && js_Boot.__isNativeObj(cl)) {
				if(o instanceof cl) {
					return true;
				}
			}
		} else {
			return false;
		}
		if(cl == Class ? o.__name__ != null : false) {
			return true;
		}
		if(cl == Enum ? o.__ename__ != null : false) {
			return true;
		}
		return o.__enum__ == cl;
	}
};
js_Boot.__nativeClassName = function(o) {
	var name = js_Boot.__toStr.call(o).slice(8,-1);
	if(name == "Object" || name == "Function" || name == "Math" || name == "JSON") {
		return null;
	}
	return name;
};
js_Boot.__isNativeObj = function(o) {
	return js_Boot.__nativeClassName(o) != null;
};
js_Boot.__resolveNativeClass = function(name) {
	return $global[name];
};
var js_html_compat_ArrayBuffer = function(a) {
	if((a instanceof Array) && a.__enum__ == null) {
		this.a = a;
		this.byteLength = a.length;
	} else {
		var len = a;
		this.a = [];
		var _g1 = 0;
		var _g = len;
		while(_g1 < _g) {
			var i = _g1++;
			this.a[i] = 0;
		}
		this.byteLength = len;
	}
};
js_html_compat_ArrayBuffer.__name__ = ["js","html","compat","ArrayBuffer"];
js_html_compat_ArrayBuffer.sliceImpl = function(begin,end) {
	var u = new Uint8Array(this,begin,end == null ? null : end - begin);
	var result = new ArrayBuffer(u.byteLength);
	var resultArray = new Uint8Array(result);
	resultArray.set(u);
	return result;
};
js_html_compat_ArrayBuffer.prototype = {
	slice: function(begin,end) {
		return new js_html_compat_ArrayBuffer(this.a.slice(begin,end));
	}
	,__class__: js_html_compat_ArrayBuffer
};
var js_html_compat_Uint8Array = function() { };
js_html_compat_Uint8Array.__name__ = ["js","html","compat","Uint8Array"];
js_html_compat_Uint8Array._new = function(arg1,offset,length) {
	var arr;
	if(typeof(arg1) == "number") {
		arr = [];
		var _g1 = 0;
		var _g = arg1;
		while(_g1 < _g) {
			var i = _g1++;
			arr[i] = 0;
		}
		arr.byteLength = arr.length;
		arr.byteOffset = 0;
		arr.buffer = new js_html_compat_ArrayBuffer(arr);
	} else if(js_Boot.__instanceof(arg1,js_html_compat_ArrayBuffer)) {
		var buffer = arg1;
		if(offset == null) {
			offset = 0;
		}
		if(length == null) {
			length = buffer.byteLength - offset;
		}
		if(offset == 0) {
			arr = buffer.a;
		} else {
			arr = buffer.a.slice(offset,offset + length);
		}
		arr.byteLength = arr.length;
		arr.byteOffset = offset;
		arr.buffer = buffer;
	} else if((arg1 instanceof Array) && arg1.__enum__ == null) {
		arr = arg1.slice();
		arr.byteLength = arr.length;
		arr.byteOffset = 0;
		arr.buffer = new js_html_compat_ArrayBuffer(arr);
	} else {
		throw new js__$Boot_HaxeError("TODO " + Std.string(arg1));
	}
	arr.subarray = js_html_compat_Uint8Array._subarray;
	arr.set = js_html_compat_Uint8Array._set;
	return arr;
};
js_html_compat_Uint8Array._set = function(arg,offset) {
	if(js_Boot.__instanceof(arg.buffer,js_html_compat_ArrayBuffer)) {
		var a = arg;
		if(arg.byteLength + offset > this.byteLength) {
			throw new js__$Boot_HaxeError("set() outside of range");
		}
		var _g1 = 0;
		var _g = arg.byteLength;
		while(_g1 < _g) {
			var i = _g1++;
			this[i + offset] = a[i];
		}
	} else if((arg instanceof Array) && arg.__enum__ == null) {
		var a1 = arg;
		if(a1.length + offset > this.byteLength) {
			throw new js__$Boot_HaxeError("set() outside of range");
		}
		var _g11 = 0;
		var _g2 = a1.length;
		while(_g11 < _g2) {
			var i1 = _g11++;
			this[i1 + offset] = a1[i1];
		}
	} else {
		throw new js__$Boot_HaxeError("TODO");
	}
};
js_html_compat_Uint8Array._subarray = function(start,end) {
	var a = js_html_compat_Uint8Array._new(this.slice(start,end));
	a.byteOffset = start;
	return a;
};
var om_Activity = function(id) {
	if(id == null) {
		var cname = Type.getClassName(js_Boot.getClass(this));
		var i = cname.lastIndexOf(".");
		if(i != -1) {
			cname = cname.substring(i + 1);
		}
		if(StringTools.endsWith(cname,"Activity")) {
			cname = cname.substring(0,cname.length - "Activity".length);
		} else {
			console.log("Activity class name should end with \"Activity\"");
		}
		id = cname.toLowerCase();
	}
	this.id = id;
	this.element = window.document.createElement("div");
	this.element.classList.add("activity");
	this.element.id = id;
};
om_Activity.__name__ = ["om","Activity"];
om_Activity.boot = function(activity,parentElement) {
	if(parentElement == null) {
		parentElement = window.document.body;
	}
	parentElement.appendChild(activity.element);
	activity.onCreate();
	activity.onStart();
};
om_Activity.prototype = {
	replace: function(activity) {
		this.element.parentElement.appendChild(activity.element);
		activity.onCreate();
		activity.onStart();
		this.onStop();
		this.onDestroy();
	}
	,onCreate: function() {
	}
	,onStart: function() {
	}
	,onStop: function() {
		this.element.remove();
	}
	,onDestroy: function() {
	}
	,__class__: om_Activity
};
var om_App = function() { };
om_App.__name__ = ["om","App"];
var om_audio_VolumeMeter = function(context,bufferSize,clipLevel,averaging,clipLag) {
	if(clipLag == null) {
		clipLag = 750;
	}
	if(averaging == null) {
		averaging = 0.95;
	}
	if(clipLevel == null) {
		clipLevel = 0.98;
	}
	if(bufferSize == null) {
		bufferSize = 512;
	}
	var _gthis = this;
	this.context = context;
	this.clipLevel = clipLevel;
	this.averaging = averaging;
	this.clipLag = clipLag;
	this.processor = context.createScriptProcessor(bufferSize);
	this.processor.checkClipping = function() {
		if(!clipping) {
			return false;
		}
		if(lastClip + clipLag < window.performance.now()) {
			clipping = false;
		}
		return clipping;
	};
	this.processor.shutdown = function() {
		_gthis.processor.disconnect();
		_gthis.processor.onaudioprocess = null;
	};
	var clipping = false;
	var lastClip = 0.0;
	var buf;
	var sum = 0.0;
	var x;
	this.processor.onaudioprocess = function(e) {
		buf = e.inputBuffer.getChannelData(0);
		sum = 0;
		var _g1 = 0;
		var _g = buf.length;
		while(_g1 < _g) {
			var i = _g1++;
			x = buf[i];
			if((x < 0 ? -x : x) >= clipLevel) {
				clipping = true;
				lastClip = window.performance.now();
			}
			sum += x * x;
		}
		_gthis.rms = Math.sqrt(sum / buf.length);
		var a = _gthis.rms;
		var b = _gthis.volume * averaging;
		_gthis.volume = a < b ? b : a;
		_gthis.decibel = 10 * (Math.log(_gthis.volume) / 2.302585092994046);
	};
	this.processor.connect(context.destination);
};
om_audio_VolumeMeter.__name__ = ["om","audio","VolumeMeter"];
om_audio_VolumeMeter.prototype = {
	__class__: om_audio_VolumeMeter
};
var soda_App = function() { };
soda_App.__name__ = ["soda","App"];
soda_App.__interfaces__ = [om_App];
soda_App.init = function() {
	om_Activity.boot(new soda_app_BootActivity());
};
soda_App.main = function() {
	window.onload = function(e) {
		window.document.body.innerHTML = "";
		window.document.addEventListener("contextmenu",function(e1) {
			return e1.preventDefault();
		});
		soda_App.init();
		return;
	};
};
var soda_app_BootActivity = function(id) {
	om_Activity.call(this,id);
};
soda_app_BootActivity.__name__ = ["soda","app","BootActivity"];
soda_app_BootActivity.__super__ = om_Activity;
soda_app_BootActivity.prototype = $extend(om_Activity.prototype,{
	onCreate: function() {
		om_Activity.prototype.onCreate.call(this);
		this.element.textContent = "Booting ...";
	}
	,onStart: function() {
		var _gthis = this;
		om_Activity.prototype.onStart.call(this);
		var audio = new AudioContext();
		navigator.mediaDevices.getUserMedia({ audio : true}).then(function(stream) {
			_gthis.replace(new soda_app_MainActivity(audio,stream));
		})["catch"](function(e) {
			_gthis.replace(new soda_app_ErrorActivity(e));
			return;
		});
	}
	,__class__: soda_app_BootActivity
});
var soda_app_ErrorActivity = function(error) {
	om_Activity.call(this);
	this.error = error;
};
soda_app_ErrorActivity.__name__ = ["soda","app","ErrorActivity"];
soda_app_ErrorActivity.__super__ = om_Activity;
soda_app_ErrorActivity.prototype = $extend(om_Activity.prototype,{
	onCreate: function() {
		om_Activity.prototype.onCreate.call(this);
		this.element.classList.add("error");
		this.element.textContent = "ERROR: " + this.error;
	}
	,__class__: soda_app_ErrorActivity
});
var soda_app_MainActivity = function(audio,stream) {
	om_Activity.call(this);
	this.frequencyAnalyser = audio.createAnalyser();
	this.frequencyAnalyser.fftSize = 128;
	this.waveformAnalyser = audio.createAnalyser();
	this.waveformAnalyser.fftSize = 1024;
	this.waveformAnalyser.connect(this.frequencyAnalyser);
	this.frequencyData = new Uint8Array(this.frequencyAnalyser.frequencyBinCount);
	this.waveformData = new Uint8Array(this.waveformAnalyser.frequencyBinCount);
	this.microphone = audio.createMediaStreamSource(stream);
	this.microphone.connect(this.waveformAnalyser);
	this.meter = new om_audio_VolumeMeter(audio);
	this.microphone.connect(this.meter.processor);
};
soda_app_MainActivity.__name__ = ["soda","app","MainActivity"];
soda_app_MainActivity.__super__ = om_Activity;
soda_app_MainActivity.prototype = $extend(om_Activity.prototype,{
	onCreate: function() {
		om_Activity.prototype.onCreate.call(this);
		this.spectrum = new soda_gui_Spectrum();
		this.element.appendChild(this.spectrum.element);
		this.volumeBar = new soda_gui_VolumeBar();
		this.element.appendChild(this.volumeBar.element);
		this.info = window.document.createElement("div");
		this.info.classList.add("info");
		window.document.body.appendChild(this.info);
	}
	,onStart: function() {
		om_Activity.prototype.onStart.call(this);
		this.frameId = window.requestAnimationFrame($bind(this,this.update));
		window.document.addEventListener("webkitvisibilitychange",$bind(this,this.handlePageVisibilityChange),false);
		window.addEventListener("resize",$bind(this,this.handleWindowResize),false);
	}
	,onStop: function() {
		om_Activity.prototype.onStop.call(this);
		window.cancelAnimationFrame(this.frameId);
		window.document.removeEventListener("webkitvisibilitychange",$bind(this,this.handlePageVisibilityChange));
		window.removeEventListener("resize",$bind(this,this.handleWindowResize));
	}
	,update: function(time) {
		this.frameId = window.requestAnimationFrame($bind(this,this.update));
		this.frequencyAnalyser.getByteFrequencyData(this.frequencyData);
		this.waveformAnalyser.getByteTimeDomainData(this.waveformData);
		this.spectrum.draw(this.frequencyData,this.waveformData);
		this.volumeBar.setValue(this.meter.volume);
		this.info.textContent = (this.meter.decibel | 0) + "";
		var tmp = this.meter.decibel | 0;
		window.document.title = tmp + "db";
	}
	,handlePageVisibilityChange: function(e) {
	}
	,handleWindowResize: function(e) {
		this.spectrum.resize(window.innerWidth,window.innerHeight);
	}
	,__class__: soda_app_MainActivity
});
var soda_gui_Spectrum = function(peakDelay) {
	if(peakDelay == null) {
		peakDelay = 60;
	}
	this.peakDelay = peakDelay;
	this.element = window.document.createElement("div");
	this.element.classList.add("spectrum");
	this.grid = window.document.createElement("canvas");
	this.grid.classList.add("grid");
	this.grid.width = window.innerWidth;
	this.grid.height = window.innerHeight;
	this.element.appendChild(this.grid);
	this.canvas = window.document.createElement("canvas");
	this.canvas.classList.add("spectrum");
	this.canvas.width = window.innerWidth;
	this.canvas.height = window.innerHeight;
	this.element.appendChild(this.canvas);
	this.ctx = this.canvas.getContext("2d",null);
	this.drawGrid(128);
	this.frequencyHistory = [];
};
soda_gui_Spectrum.__name__ = ["soda","gui","Spectrum"];
soda_gui_Spectrum.prototype = {
	resize: function(width,height) {
		this.grid.width = this.canvas.width = width;
		this.grid.height = this.canvas.height = height;
		this.drawGrid(128);
	}
	,draw: function(frequency,waveform) {
		this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
		var bw = this.canvas.width / waveform.length;
		var px = 0.0;
		var py = 0.0;
		var ctx = this.canvas.getContext("2d",null);
		ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
		ctx.save();
		ctx.beginPath();
		ctx.strokeStyle = "rgba(90,90,90,0.5)";
		ctx.lineWidth = 2;
		var sw = this.canvas.width / waveform.length;
		var px1 = 0.0;
		var py1;
		var _g1 = 0;
		var _g = waveform.length;
		while(_g1 < _g) {
			var i = _g1++;
			py1 = waveform[i] / 128 * this.canvas.height / 2;
			if(i == 0) {
				ctx.moveTo(px1,py1);
			} else {
				ctx.lineTo(px1,py1);
			}
			px1 += sw;
		}
		ctx.lineTo(this.canvas.width,this.canvas.height / 2);
		ctx.stroke();
		var copy = new Uint8Array(frequency.length);
		var _g11 = 0;
		var _g2 = frequency.length;
		while(_g11 < _g2) {
			var i1 = _g11++;
			copy[i1] = frequency[i1];
		}
		this.frequencyHistory.push(copy);
		if(this.frequencyHistory.length > this.peakDelay) {
			this.frequencyHistory.shift();
		}
		var frequencyMax = new Uint8Array(frequency.length);
		var _g3 = 0;
		var _g12 = this.frequencyHistory;
		while(_g3 < _g12.length) {
			var freq = _g12[_g3];
			++_g3;
			var _g31 = 0;
			var _g21 = freq.length;
			while(_g31 < _g21) {
				var i2 = _g31++;
				var va = freq[i2];
				var vb = frequencyMax[i2];
				if(va > vb) {
					frequencyMax[i2] = va;
				}
			}
		}
		this.drawFrequency(frequencyMax,"rgba(40,40,40,1)");
		this.drawFrequency(frequency,"rgba(230,230,230,1)");
	}
	,drawFrequency: function(data,color) {
		var bw = this.canvas.width / data.length | 0;
		var bh;
		var px = 0.0;
		this.ctx.beginPath();
		this.ctx.fillStyle = color;
		var _g1 = 0;
		var _g = data.length;
		while(_g1 < _g) {
			var i = _g1++;
			bh = this.canvas.height * (data[i] / this.canvas.height);
			this.ctx.fillRect(i * (bw + 1),this.canvas.height - bh,bw,bh);
		}
	}
	,drawGrid: function(dd) {
		var ctx = this.grid.getContext("2d",null);
		ctx.lineWidth = 1;
		ctx.strokeStyle = "rgb(20,20,20)";
		var fieldSize = this.canvas.width / dd;
		var _g1 = 0;
		var _g = dd;
		while(_g1 < _g) {
			var i = _g1++;
			var px = i * fieldSize;
			ctx.moveTo(px,0);
			ctx.lineTo(px,this.canvas.height);
		}
		var _g11 = 0;
		var _g2 = this.canvas.height / fieldSize | 0;
		while(_g11 < _g2) {
			var i1 = _g11++;
			var py = i1 * fieldSize;
			ctx.moveTo(0,py);
			ctx.lineTo(this.canvas.width,py);
		}
		ctx.stroke();
	}
	,__class__: soda_gui_Spectrum
};
var soda_gui_VolumeBar = function() {
	this.element = window.document.createElement("div");
	this.element.classList.add("volumebar");
	this.element.style.background = "#fff";
};
soda_gui_VolumeBar.__name__ = ["soda","gui","VolumeBar"];
soda_gui_VolumeBar.prototype = {
	setValue: function(volume) {
		var v = volume * window.innerHeight * 10 | 0;
		this.element.style.height = v + "px";
		this.element.style.top = window.innerHeight - v + "px";
	}
	,__class__: soda_gui_VolumeBar
};
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
String.prototype.__class__ = String;
String.__name__ = ["String"];
Array.__name__ = ["Array"];
var Int = { };
var Dynamic = { };
var Float = Number;
var Bool = Boolean;
var Class = { };
var Enum = { };
var ArrayBuffer = $global.ArrayBuffer || js_html_compat_ArrayBuffer;
if(ArrayBuffer.prototype.slice == null) {
	ArrayBuffer.prototype.slice = js_html_compat_ArrayBuffer.sliceImpl;
}
var Uint8Array = $global.Uint8Array || js_html_compat_Uint8Array._new;
js_Boot.__toStr = ({ }).toString;
js_html_compat_Uint8Array.BYTES_PER_ELEMENT = 1;
soda_App.main();
})(typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);

//# sourceMappingURL=soda.js.map