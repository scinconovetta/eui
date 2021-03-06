import React, {
  createElement,
} from 'react';

import { useRouterHistory } from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';

import {
  GuidePage,
  GuideSection,
} from './components';

import {
  EuiErrorBoundary,
} from '../../src/components';

// Guidelines

import ButtonGuidelines
  from './views/guidelines/button';

import ColorGuidelines
  from './views/guidelines/colors';

import ModalGuidelines
  from './views/guidelines/modals';

import TextScales
  from './views/text_scaling/text_scaling_sandbox';

import ToastGuidelines
  from './views/guidelines/toasts';

import WritingGuidelines
  from './views/guidelines/writing';

// Services

import { IsColorDarkExample }
  from './views/is_color_dark/is_color_dark_example';


import { UtilityClassesExample }
  from './views/utility_classes/utility_classes_example';

// Component examples

import { AccessibilityExample }
  from './views/accessibility/accessibility_example';

import { AccordionExample }
  from './views/accordion/accordion_example';

import { AvatarExample }
  from './views/avatar/avatar_example';

import { BadgeExample }
  from './views/badge/badge_example';

import { BottomBarExample }
  from './views/bottom_bar/bottom_bar_example';

import { BreadcrumbsExample }
  from './views/breadcrumbs/breadcrumbs_example';

import { ButtonExample }
  from './views/button/button_example';

import { CardExample }
  from './views/card/card_example';

import { CallOutExample }
  from './views/call_out/call_out_example';

import { CodeEditorExample }
  from './views/code_editor/code_editor_example';

import { CodeExample }
  from './views/code/code_example';

import { ColorPickerExample }
  from './views/color_picker/color_picker_example';

import { ComboBoxExample }
  from './views/combo_box/combo_box_example';

import { ContextMenuExample }
  from './views/context_menu/context_menu_example';

import { DatePickerExample }
  from './views/date_picker/date_picker_example';

import { DelayHideExample }
  from './views/delay_hide/delay_hide_example';

import { DescriptionListExample }
  from './views/description_list/description_list_example';

import { EmptyPromptExample }
  from './views/empty_prompt/empty_prompt_example';

import { ErrorBoundaryExample }
  from './views/error_boundary/error_boundary_example';

import { ExpressionExample }
  from './views/expression/expression_example';

import { FilterGroupExample }
  from './views/filter_group/filter_group_example';

import { FlexExample }
  from './views/flex/flex_example';

import { FlyoutExample }
  from './views/flyout/flyout_example';

import { FormControlsExample }
  from './views/form_controls/form_controls_example';

import { FormLayoutsExample }
  from './views/form_layouts/form_layouts_example';

import { FormValidationExample }
  from './views/form_validation/form_validation_example';

import { HeaderExample }
  from './views/header/header_example';

import { HealthExample }
  from './views/health/health_example';

import { HighlightExample }
  from './views/highlight/highlight_example';

import { HorizontalRuleExample }
  from './views/horizontal_rule/horizontal_rule_example';

import { IconExample }
  from './views/icon/icon_example';

import { ImageExample }
  from './views/image/image_example';

import { KeyPadMenuExample }
  from './views/key_pad_menu/key_pad_menu_example';

import { LinkExample }
  from './views/link/link_example';

import { LoadingExample }
  from './views/loading/loading_example';

import { ModalExample }
  from './views/modal/modal_example';

import { MutationObserverExample }
  from './views/mutation_observer/mutation_observer_example';

import { OutsideClickDetectorExample }
  from './views/outside_click_detector/outside_click_detector_example';

import { PageExample }
  from './views/page/page_example';

import { PaginationExample }
  from './views/pagination/pagination_example';

import { PanelExample }
  from './views/panel/panel_example';

import { PopoverExample }
  from './views/popover/popover_example';

import { PortalExample }
  from './views/portal/portal_example';

import { ProgressExample }
  from './views/progress/progress_example';

import { ResponsiveExample }
  from './views/responsive/responsive_example';

import { SearchBarExample }
  from './views/search_bar/search_bar_example';

import { SideNavExample }
  from './views/side_nav/side_nav_example';

import { SpacerExample }
  from './views/spacer/spacer_example';

import { StepsExample }
  from './views/steps/steps_example';

import { TableExample }
  from './views/tables/tables_example';

import { TabsExample }
  from './views/tabs/tabs_example';

import { TextExample }
  from './views/text/text_example';

import { TitleExample }
  from './views/title/title_example';

import { ToastExample }
  from './views/toast/toast_example';

import { ToolTipExample }
  from './views/tool_tip/tool_tip_example';

import { ToggleExample }
  from './views/toggle/toggle_example';

import { XYChartExample }
  from './views/series_chart/series_chart_example';

import { XYChartAxisExample }
  from './views/series_chart_axis/series_axis_example';

import { XYChartBarExample }
  from './views/series_chart_bar/bar_example';

import { XYChartHistogramExample }
  from './views/series_chart_histogram/histogram_example';

import { XYChartAreaExample }
  from './views/series_chart_area/area_example';

import { XYChartLineExample }
  from './views/series_chart_line/line_example';

import { Changelog }
  from './views/package/changelog';

/**
 * Lowercases input and replaces spaces with hyphens:
 * e.g. 'GridView Example' -> 'gridview-example'
 */
const slugify = str => {
  const parts = str
    .toLowerCase()
    .replace(/[-]+/g, ' ')
    .replace(/[^\w^\s]+/g, '')
    .replace(/ +/g, ' ').split(' ');
  return parts.join('-');
};

const createExample = (example) => {
  if (!example) {
    throw new Error(`One of your example pages is undefined. This usually happens when you export or import it with the wrong name.`);
  }

  const { title, intro, sections } = example;
  sections.forEach(section => {
    section.id = slugify(section.title || title);
  });

  const renderedSections = sections.map(section => createElement(GuideSection, {
    key: section.title || title,
    ...section
  }));

  const component = () => (
    <EuiErrorBoundary>
      <GuidePage title={title} intro={intro}>
        {renderedSections}
      </GuidePage>
    </EuiErrorBoundary>
  );

  return {
    name: title,
    component,
    sections,
  };
};

const navigation = [{
  name: 'Guidelines',
  items: [{
    name: 'Buttons',
    component: ButtonGuidelines,
  }, {
    name: 'Colors',
    component: ColorGuidelines,
  }, {
    name: 'Modals',
    component: ModalGuidelines,
  }, {
    name: 'Text scales',
    component: TextScales,
  }, {
    name: 'Toasts',
    component: ToastGuidelines,
  }, {
    name: 'Writing',
    component: WritingGuidelines,
  }],
}, {
  name: 'Layout',
  items: [
    AccordionExample,
    BottomBarExample,
    FlexExample,
    FlyoutExample,
    HeaderExample,
    HorizontalRuleExample,
    ModalExample,
    PageExample,
    PanelExample,
    PopoverExample,
    SpacerExample,
  ].map(example => createExample(example)),
}, {
  name: 'Navigation',
  items: [
    BreadcrumbsExample,
    ButtonExample,
    ContextMenuExample,
    KeyPadMenuExample,
    LinkExample,
    PaginationExample,
    SideNavExample,
    StepsExample,
    TabsExample,
  ].map(example => createExample(example)),
}, {
  name: 'Display',
  items: [
    AvatarExample,
    BadgeExample,
    CallOutExample,
    CardExample,
    CodeExample,
    DescriptionListExample,
    EmptyPromptExample,
    HealthExample,
    IconExample,
    ImageExample,
    LoadingExample,
    ProgressExample,
    TableExample,
    TextExample,
    TitleExample,
    ToastExample,
    ToolTipExample,
  ].map(example => createExample(example)),
}, {
  name: 'Forms',
  items: [
    FormLayoutsExample,
    FormControlsExample,
    FormValidationExample,
    ComboBoxExample,
    ColorPickerExample,
    CodeEditorExample,
    DatePickerExample,
    ExpressionExample,
    FilterGroupExample,
    SearchBarExample,
  ].map(example => createExample(example)),
},
{
  name: 'Series charts (beta)',
  items: [
    XYChartExample,
    XYChartAxisExample,
    XYChartLineExample,
    XYChartAreaExample,
    XYChartBarExample,
    XYChartHistogramExample,
  ].map(example => createExample(example)),
},
{
  name: 'Utilities',
  items: [
    AccessibilityExample,
    ResponsiveExample,
    DelayHideExample,
    ErrorBoundaryExample,
    HighlightExample,
    IsColorDarkExample,
    OutsideClickDetectorExample,
    PortalExample,
    ToggleExample,
    UtilityClassesExample,
    MutationObserverExample,
  ].map(example => createExample(example)),
}, {
  name: 'Package',
  items: [
    Changelog
  ]
}].map(({ name, items, ...rest }) => ({
  name,
  type: slugify(name),
  items: items.map(({ name: itemName, ...rest }) => ({
    name: itemName,
    path: `${slugify(name)}/${slugify(itemName)}`,
    ...rest,
  })),
  ...rest
}));

const allRoutes = navigation.reduce((accummulatedRoutes, section) => {
  accummulatedRoutes.push(...section.items);
  return accummulatedRoutes;
}, []);

export default {
  history: useRouterHistory(createHashHistory)(),
  navigation,

  getRouteForPath: path => {
    // React-router kinda sucks. Sometimes the path contains a leading slash, sometimes it doesn't.
    const normalizedPath = path[0] === '/' ? path.slice(1, path.length) : path;
    return allRoutes.find(route => normalizedPath === route.path);
  },

  getAppRoutes: function getAppRoutes() {
    return allRoutes;
  },

  getPreviousRoute: function getPreviousRoute(routeName) {
    const index = allRoutes.findIndex(item => {
      return item.name === routeName;
    });

    return index >= 0 ? allRoutes[index - 1] : undefined;
  },

  getNextRoute: function getNextRoute(routeName) {
    const index = allRoutes.findIndex(item => {
      return item.name === routeName;
    });

    return index < allRoutes.length - 1 ? allRoutes[index + 1] : undefined;
  },
};
