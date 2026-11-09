---
name: Jerry Insurance Profile
description: 深藍金色的手機名片式保險諮詢網站
colors:
  background: "#0d1b2a"
  surface: "#14273b"
  text: "#f5edd6"
  muted: "#b8c5d6"
  accent: "#d1b264"
  accent-hover: "#e1c87f"
  line: "#34485d"
typography:
  display:
    fontFamily: "Jerry Serif, Noto Serif TC, serif"
    fontSize: "32px"
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: "0.02em"
  headline:
    fontFamily: "Jerry Serif, Noto Serif TC, serif"
    fontSize: "21px"
    fontWeight: 700
    lineHeight: 1.5
  body:
    fontFamily: "Microsoft JhengHei, PingFang TC, system-ui, sans-serif"
    fontSize: "14px"
    lineHeight: 1.8
rounded:
  panel: "16px"
  pill: "999px"
spacing:
  compact: "12px"
  panel: "20px"
  section: "36px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.background}"
    rounded: "{rounded.pill}"
    padding: "12px 20px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  question-panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.panel}"
    padding: "18px 20px"
---

# Design System: Jerry Insurance Profile

## Overview

採使用者提供的 https://yichenweb.netlify.app/ 作為視覺參考，以手機名片式單欄閱讀為核心。保留 Jerry 自己的介紹、問題、案例、QA 與預約流程；內容先精簡，待本人補齊照片與真實案例。

## Colors

深藍作為全頁底色，象牙白呈現主要內容，灰藍用於說明，金色集中在預約與焦點。色彩的規範值以 frontmatter 與 css/style.css 的 CSS variables 為準。

## Typography

標題使用自託管 Noto Serif TC 小字集，CSS 家族名 Jerry Serif；內文使用系統中文字型。字型與 SIL Open Font License 放在 assets/fonts。字集未包含的新增文字由後備字型呈現。

## Layout

桌機與手機皆維持單欄，內容最大 480px；一般兩側留 20px，360px 以下留 16px。頂端固定的預約入口、112px 圓形照片、置中姓名與短介紹構成第一段；接續四個問題、案例、三個 QA、Google 表單。

## Elevation & Depth

以實色表面與細邊框區分內容，不使用陰影或玻璃模糊。所有內容預設可見，不以進場動畫隱藏。

## Shapes

照片為圓形，預約按鈕為膠囊形，問題與案例區塊為 16px 圓角。

## Components

主預約按鈕使用金底深藍字、滿寬與至少 52px 高度；頂端入口至少 44px。問題區塊為靜態閱讀內容，不使用會誤導點擊的箭頭。QA 使用原生 details/summary。Google 表單直接寫在 HTML，支援無 JavaScript 瀏覽；複製連結為可用時才顯示的次要功能。

## Do's and Don'ts

- Do 延續窄版置中與簡短說明。
- Do 為文字保留 AA 對比、鍵盤焦點與 reduced-motion 支援。
- Don't 填入他人的照片、公司、案例或未經確認的服務承諾。
- Don't 將參考頁的個人內容當成 Jerry 的經歷。
