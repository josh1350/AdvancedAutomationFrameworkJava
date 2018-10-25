package com.ea.framework.controls.elements;

import com.ea.framework.controls.api.ImplementedBy;
import com.ea.framework.controls.internals.Control;


@ImplementedBy(ButtonBase.class)
public interface Button extends Control {

    void PerformClick();
    String GetButtonText();
    void PerformSubmit();
}
