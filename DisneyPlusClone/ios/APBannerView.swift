//
//  APBannerView.swift
//  DisneyPlusClone
//
//  Created by apple on 2021/12/20.
//

import UIKit
import AdPieSDK

class APBannerView: UIView {

  private var adView: APAdView!
  
  override init(frame: CGRect) {
    super.init(frame: frame)
    setupView()
  }
  
  required init?(coder aDecoder: NSCoder) {
    super.init(coder: aDecoder)
    setupView()
  }
  
  private func setupView() {
    
    //위치 여기?
    //adView = APAdView(frame: CGRect(x: 0, y: 0, width: 300, height: 250))
    adView = APAdView(frame: CGRect(x: 0, y: 0, width: 320, height: 480))
    self.addSubview(adView)
    adView.slotId = "57342fdd7174ea39844cac15"
    adView.load()
  }
  
}

