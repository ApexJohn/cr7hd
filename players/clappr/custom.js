
var clapprTemplate = Object.getOwnPropertyDescriptor(Clappr.MediaControl.prototype, 'template');
clapprTemplate.get = function () {
    return Clappr.template(`<div class="media-control-background" data-background></div>
<div class="media-control-layer" data-controls>
  <%  var renderBar = function(name) { %>
      <div class="bar-container" data-<%= name %>>
        <div class="bar-background" data-<%= name %>>
          <div class="bar-fill-1" data-<%= name %>></div>
          <div class="bar-fill-2" data-<%= name %>></div>
          <div class="bar-hover" data-<%= name %>></div>
        </div>
        <div class="bar-scrubber" data-<%= name %>>
          <div class="bar-scrubber-icon" data-<%= name %>></div>
        </div>
      </div>
  <%  }; %>
  <%  var renderSegmentedBar = function(name, segments) {
      segments = segments || 10; %>
    <div class="bar-container" data-<%= name %>>
    <% for (var i = 0; i < segments; i++) { %>
      <div class="segmented-bar-element" data-<%= name %>></div>
    <% } %>
    </div>
  <% }; %>
  <% var renderDrawer = function(name, renderContent) { %>
      <div class="drawer-container" data-<%= name %>>
        <div class="drawer-icon-container" data-<%= name %>>
          <div class="drawer-icon media-control-icon" data-<%= name %>></div>
          <span class="drawer-text" data-<%= name %>></span>
        </div>
        <% renderContent(name); %>
      </div>
  <% }; %>
  <% var renderIndicator = function(name) { %>
      <div class="media-control-indicator" data-<%= name %>></div>
  <% }; %>
  <% var renderButton = function(name) { %>
    <button type="button" class="media-control-button media-control-icon" data-<%= name %> aria-label="<%= name %>"></button>
  <% }; %>
  <%  var templates = {
        bar: renderBar,
        segmentedBar: renderSegmentedBar,
      };
      var render = function(settingsList) {
        settingsList.forEach(function(setting) {
          if(setting === "seekbar") {
            renderBar(setting);
          } else if (setting === "volume") {
            renderDrawer(setting, settings.volumeBarTemplate ? templates[settings.volumeBarTemplate] : function(name) { return renderSegmentedBar(name); });
          } else if (setting === "duration" || setting === "position") {
            renderIndicator(setting);
          } else {
            renderButton(setting);
          }
        });
      }; %>
  <% if (settings.default && settings.default.length) { %>
  <div class="media-control-center-panel" data-media-control>
    <% render(settings.default); %>
  </div>
  <% } %>
  <% if (settings.left && settings.left.length) { %>
  <div class="media-control-left-panel" data-media-control>
    <% render(settings.left); %>
  </div>
  <% } %>
  <% if (settings.right && settings.right.length) { %>
  <div class="media-control-right-panel" asdf data-media-control>
    <% render(settings.right); %>
    <a class="dvr-only" href="javascript:;" data-ff style="margin-right:5px; width: 30px;/* font-size: 14px !important; */text-align: left;/* color: black !important; */background-color: transparent;color: #fff;font-family: Roboto,Open Sans,Arial,sans-serif;-webkit-font-smoothing: antialiased;border: none;font-size: 12px;">+2m</a>
    <a   class="dvr-only" href="javascript:;" data-rw style="width: 30px;/* font-size: 14px !important; */text-align: left;/* color: black !important; */background-color: transparent;color: #fff;font-family: Roboto,Open Sans,Arial,sans-serif;-webkit-font-smoothing: antialiased;border: none;font-size: 12px;">-2m</a>
  </div>
  <% } %>
</div>`);
};
Object.defineProperty(Clappr.MediaControl.prototype, 'template', clapprTemplate);