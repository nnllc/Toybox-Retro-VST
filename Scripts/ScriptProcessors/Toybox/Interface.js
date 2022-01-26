Content.makeFrontInterface(1000, 600);

//WEBSITE BUTTON

inline function onWebsiteButtonControl(component, value)
{
	Engine.openWebsite("https://newnationllc.com");
};

Content.getComponent("WebsiteButton").setControlCallback(onWebsiteButtonControl);

//Main FX Knobs
//DEGRADE KNOB

//Call for Effects
const var Saturator1 = Synth.getEffect("Saturator1");
const var Degrade1 = Synth.getEffect("Degrade1");

//Call for Hidden Knobs - link to Effect via Processor ID
const var DegradeHIDE0 = Content.getComponent("DegradeHIDE0");
const var DegradeHIDE1 = Content.getComponent("DegradeHIDE1");
const var DegradeHIDE2 = Content.getComponent("DegradeHIDE2");
const var DegradeHIDE3 = Content.getComponent("DegradeHIDE3");
const var DegradeHIDE4 = Content.getComponent("DegradeHIDE4");

//Call for Master Knob
inline function onMainFXKnb1Control(component, value)
{
	//Call for Hidden Knobs + changed = conecting to module

	DegradeHIDE0.setValue(value);
	DegradeHIDE0.changed();
	
	DegradeHIDE1.setValue(value);
	DegradeHIDE1.changed();
	
	DegradeHIDE2.setValue(value);
	DegradeHIDE2.changed();
		
	DegradeHIDE3.setValue(value);
	DegradeHIDE3.changed();
			
	DegradeHIDE4.setValue(value);
	DegradeHIDE4.changed();
};

Content.getComponent("MainFXKnb1").setControlCallback(onMainFXKnb1Control);

//DYNAMICS KNOB

//Call for Effects
const var CompLimiter = Synth.getEffect("CompLimiter");

const var Width = Synth.getEffect("Width");

//Call for Hidden Knobs - link to Effect via Processor ID
const var DynamicsHIDE0 = Content.getComponent("DynamicsHIDE0");

const var DynamicsHIDE1 = Content.getComponent("DynamicsHIDE1");


inline function onMainFXKnb2Control(component, value)
{
	DynamicsHIDE0.setValue(value);
	DynamicsHIDE0.changed();
	
	DynamicsHIDE1.setValue(value);
	DynamicsHIDE1.changed();
};

Content.getComponent("MainFXKnb2").setControlCallback(onMainFXKnb2Control);



//AIR KNOB

//Call for Effects
const var AirDelay = Synth.getEffect("AirDelay");
const var AirReverb = Synth.getEffect("AirReverb");
const var AirChorus = Synth.getEffect("AirChorus");
const var AirPhase = Synth.getEffect("AirPhase");

//Call for Hidden Knobs - link to Effect via Processor ID
//Delay
const var AirHIDE2 = Content.getComponent("AirHIDE2");
const var AirHIDE3 = Content.getComponent("AirHIDE3");
const var AirHIDE4 = Content.getComponent("AirHIDE4");
const var AirHIDE5 = Content.getComponent("AirHIDE5");
const var AirHIDE6 = Content.getComponent("AirHIDE6");
const var AirHIDE7 = Content.getComponent("AirHIDE7");
const var AirHIDE8 = Content.getComponent("AirHIDE8");
const var AirHIDE9 = Content.getComponent("AirHIDE9");
const var AirHIDE10 = Content.getComponent("AirHIDE10");
const var AirHIDE11 = Content.getComponent("AirHIDE11");
const var AirHIDE12 = Content.getComponent("AirHIDE12");
const var AirHIDE13 = Content.getComponent("AirHIDE13");
const var AirHIDE14 = Content.getComponent("AirHIDE14");
const var AirHIDE15 = Content.getComponent("AirHIDE15");
const var AirHIDE16 = Content.getComponent("AirHIDE16");

//Call for Master Knob
inline function onMainFXKnb3Control(component, value)
{
	//Call for Hidden Knobs + changed = conecting to module
	
	AirHIDE2.setValueNormalized(value);
	AirHIDE2.changed();
	
	AirHIDE3.setValueNormalized(value);
	AirHIDE3.changed();
	
	AirHIDE4.setValueNormalized(value);
	AirHIDE4.changed();
	
	AirHIDE5.setValueNormalized(value);
	AirHIDE5.changed();
	
	AirHIDE6.setValueNormalized(value);
	AirHIDE6.changed();
	
	AirHIDE7.setValueNormalized(value);
	AirHIDE7.changed();
	
	AirHIDE8.setValueNormalized(value);
	AirHIDE8.changed();
	
	AirHIDE9.setValueNormalized(value);
	AirHIDE9.changed();
	
	AirHIDE10.setValueNormalized(value);
	AirHIDE10.changed();
	
	AirHIDE11.setValueNormalized(value);
	AirHIDE11.changed();
	
	AirHIDE12.setValueNormalized(value);
	AirHIDE12.changed();
	
	AirHIDE13.setValueNormalized(value);
	AirHIDE13.changed();
	
	AirHIDE14.setValueNormalized(value);
	AirHIDE14.changed();
	
	AirHIDE15.setValueNormalized(value);
	AirHIDE15.changed();
	
	AirHIDE16.setValueNormalized(value);
	AirHIDE16.changed();
};

Content.getComponent("MainFXKnb3").setControlCallback(onMainFXKnb3Control);


//SAMPLER & SAMPLEMAP MENUS
//sampler
const var Sampler1 = Synth.getSampler("Sampler1");
const var Sampler2 = Synth.getSampler("Sampler2");;
const var Sampler3 = Synth.getSampler("Sampler3");;
const var Sampler4 = Synth.getSampler("Sampler4");;

//samplemaps
const var sampleMaps = Sampler.getSampleMapList();

//combobox note: cmb = name of combobox
const var Sampler1cmb = Content.getComponent("Sampler1cmb");
Sampler1cmb.set("items", sampleMaps.join("\n"));

const var Sampler2cmb = Content.getComponent("Sampler2cmb");
Sampler2cmb.set("items", sampleMaps.join("\n"));

const var Sampler3cmb = Content.getComponent("Sampler3cmb");
Sampler3cmb.set("items", sampleMaps.join("\n"));

const var Sampler4cmb = Content.getComponent("Sampler4cmb");
Sampler4cmb.set("items", sampleMaps.join("\n"));

//Note: Sampler = name of Sampler
inline function onSampler1cmbControl(component, value)
{
	Sampler1.loadSampleMap(sampleMaps[value-1]);
};

Content.getComponent("Sampler1cmb").setControlCallback(onSampler1cmbControl);

inline function onSampler2cmbControl(component, value)
{
	Sampler2.loadSampleMap(sampleMaps[value-1]);
};

Content.getComponent("Sampler2cmb").setControlCallback(onSampler2cmbControl);

inline function onSampler3cmbControl(component, value)
{
	Sampler3.loadSampleMap(sampleMaps[value-1]);
};

Content.getComponent("Sampler3cmb").setControlCallback(onSampler3cmbControl);

inline function onSampler4cmbControl(component, value)
{
	Sampler4.loadSampleMap(sampleMaps[value-1]);
};

Content.getComponent("Sampler4cmb").setControlCallback(onSampler4cmbControl);

//Panel Closer
//const var Buttons = Content.getAllComponents("Button");
const var FXButtons = [Content.getComponent("FX1Button"),
                       Content.getComponent("FX2Button"),
                       Content.getComponent("FX3Button"),
                       Content.getComponent("FX4Button"),
                       Content.getComponent("FX5Button"),
                       Content.getComponent("PresetsButton"),
                       Content.getComponent("EnginesButton")];

//const var Panels = Content.getAllComponents("Panel");
const var Panels = [Content.getComponent("FX1Panel"),
                    Content.getComponent("FX2Panel"),
                    Content.getComponent("FX3Panel"),
                    Content.getComponent("FX4Panel"),
                    Content.getComponent("FX5Panel"),
                    Content.getComponent("PresetsPanel"),
                    Content.getComponent("EnginesPanel")];

const var holder = Content.getComponent("holder");
holder.showControl(false);


inline function onFXButtonsControl(component, value)
{
	local idx = FXButtons.indexOf(component);
	
	for (b in FXButtons)
	{
		// this line closes all panels except the one that corresponds to the button idx
		Panels[FXButtons.indexOf(b)].showControl(FXButtons.indexOf(b) == idx);
		
		// set all other btns to false
		if (FXButtons.indexOf(b) != idx)
			b.setValue(false);
	}
	
	holder.showControl(value);
}

for (b in FXButtons)
	b.setControlCallback(onFXButtonsControl);
	

holder.setMouseCallback(function(event)
{
	if (event.mouseUp)
	{
		for (b in FXButtons)
		{
			b.setValue(false);
			b.changed();
		}
	}
});

//EQ BANDS

//BAND 1
//Gain
const var Filter1 = Synth.getEffect("Filter1");

inline function onBand1GainControl(component, value)
{
    // Use the BandOffset as multiplier to get the correct attribute index
    local index = 0 * Filter1.BandOffset + Filter1.Gain;
    
	Filter1.setAttribute(index, value);
};

Content.getComponent("Band1Gain").setControlCallback(onBand1GainControl);

//Frequency
inline function onBand1FreqControl(component, value)
{
    // Use the BandOffset as multiplier to get the correct attribute index
    local index = 0 * Filter1.BandOffset + Filter1.Freq;
    
	Filter1.setAttribute(index, value);
};

Content.getComponent("Band1Freq").setControlCallback(onBand1FreqControl);

//Q
inline function onBand1QControl(component, value)
{
    // Use the BandOffset as multiplier to get the correct attribute index
    local index = 0 * Filter1.BandOffset + Filter1.Q;
    
	Filter1.setAttribute(index, value);
};

Content.getComponent("Band1Q").setControlCallback(onBand1QControl);

//BAND 2
//Gain
inline function onBand2GainControl(component, value)
{
    // Use the BandOffset as multiplier to get the correct attribute index
    local index = 1 * Filter1.BandOffset + Filter1.Gain;
    
	Filter1.setAttribute(index, value);
};

Content.getComponent("Band2Gain").setControlCallback(onBand2GainControl);

//Frequency
inline function onBand2FreqControl(component, value)
{
    // Use the BandOffset as multiplier to get the correct attribute index
    local index = 1 * Filter1.BandOffset + Filter1.Freq;
    
	Filter1.setAttribute(index, value);
};

Content.getComponent("Band2Freq").setControlCallback(onBand2FreqControl);

//Q
inline function onBand2QControl(component, value)
{
    // Use the BandOffset as multiplier to get the correct attribute index
    local index = 1 * Filter1.BandOffset + Filter1.Q;
    
	Filter1.setAttribute(index, value);
};

Content.getComponent("Band2Q").setControlCallback(onBand2QControl);

//BAND 3
//Gain
inline function onBand3GainControl(component, value)
{
    // Use the BandOffset as multiplier to get the correct attribute index
    local index = 2 * Filter1.BandOffset + Filter1.Gain;
    
	Filter1.setAttribute(index, value);
};

Content.getComponent("Band3Gain").setControlCallback(onBand3GainControl);

//Frequency
inline function onBand3FreqControl(component, value)
{
    // Use the BandOffset as multiplier to get the correct attribute index
    local index = 2 * Filter1.BandOffset + Filter1.Freq;
    
	Filter1.setAttribute(index, value);
};

Content.getComponent("Band3Freq").setControlCallback(onBand3FreqControl);

//Q
inline function onBand3QControl(component, value)
{
    // Use the BandOffset as multiplier to get the correct attribute index
    local index = 2 * Filter1.BandOffset + Filter1.Q;
    
	Filter1.setAttribute(index, value);
};

Content.getComponent("Band3Q").setControlCallback(onBand3QControl);

//BAND4
//Gain
inline function onBand4GainControl(component, value)
{
    // Use the BandOffset as multiplier to get the correct attribute index
    local index = 3 * Filter1.BandOffset + Filter1.Gain;
    
	Filter1.setAttribute(index, value);
};

Content.getComponent("Band4Gain").setControlCallback(onBand4GainControl);

//Frequency
inline function onBand4FreqControl(component, value)
{
    // Use the BandOffset as multiplier to get the correct attribute index
    local index = 3 * Filter1.BandOffset + Filter1.Freq;
    
	Filter1.setAttribute(index, value);
};

Content.getComponent("Band4Freq").setControlCallback(onBand4FreqControl);

//Q
inline function onBand4QControl(component, value)
{
    // Use the BandOffset as multiplier to get the correct attribute index
    local index = 3 * Filter1.BandOffset + Filter1.Q;
    
	Filter1.setAttribute(index, value);
};

Content.getComponent("Band4Q").setControlCallback(onBand4QControl);

function onNoteOn()
{
	
}
 function onNoteOff()
{
	
}
 function onController()
{
	
}
 function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
 