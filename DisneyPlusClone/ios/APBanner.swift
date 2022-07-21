//
//  APBanner.swift
//  DisneyPlusClone
//
//  Created by apple on 2021/12/20.
//

import Foundation
import React
import UIKit
@objc(APBanner)
class APBanner: RCTViewManager{
  override func view() -> UIView! {
    return APBannerView()
  }
  
  override class func requiresMainQueueSetup() -> Bool {
    return true
  }
}
