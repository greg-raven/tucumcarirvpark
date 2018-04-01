var nav_Navigation1 = new Object();
nav_Navigation1.mouseoverBold="false";
nav_Navigation1.selectedBgcolor="";
nav_Navigation1.importedImageMouseOver="";
nav_Navigation1.numLinks="6";
nav_Navigation1.textColor="#FFFFFF";
nav_Navigation1.mouseoverBgcolor="";
nav_Navigation1.tabCategory="basic";
nav_Navigation1.border="#FFFFFF";
nav_Navigation1.selectedItalic="false";
nav_Navigation1.graphicMouseover="false";
nav_Navigation1.type="Navigation";
nav_Navigation1.basicTab="White";
nav_Navigation1.horizontalSpacing="20";
nav_Navigation1.horizontalWrap="6";
nav_Navigation1.shinyButton="Shiny_Aqua";
nav_Navigation1.mouseoverEffect="true";
nav_Navigation1.modernButton="Basic_Black";
nav_Navigation1.orientation="vertical";
nav_Navigation1.funButton="Arts_and_Crafts";
nav_Navigation1.darkButton="Basic_Black";
nav_Navigation1.selectedTextcolor="#585858";
nav_Navigation1.lineWidth="2";
nav_Navigation1.mouseoverTextcolor="#585858";
nav_Navigation1.bold="true";
nav_Navigation1.texturedButton="Brick";
nav_Navigation1.accentStyle="Square";
nav_Navigation1.style="text";
nav_Navigation1.holidayButton="Christmas_Ornaments";
nav_Navigation1.textSize="14";
nav_Navigation1.lineColor="#000000";
nav_Navigation1.brightButton="Chicky";
nav_Navigation1.mouseoverUnderline="false";
nav_Navigation1.accentColor="Cream";
nav_Navigation1.imageHeight="";
nav_Navigation1.background="";
nav_Navigation1.textFont="Helvetica";
nav_Navigation1.hasLinks="true";
nav_Navigation1.sophisticatedButton="Antique";
nav_Navigation1.underline="false";
nav_Navigation1.simpleButton="Autumn_Leaves";
nav_Navigation1.italic="true";
nav_Navigation1.importedImageSelected="";
nav_Navigation1.basicButton="Gray";
nav_Navigation1.navID="nav_Navigation1";
nav_Navigation1.buttonCategory="basic";
nav_Navigation1.dirty="false";
nav_Navigation1.selectedBold="true";
nav_Navigation1.selectedEffect="true";
nav_Navigation1.graphicSelected="false";
nav_Navigation1.version="5";
nav_Navigation1.verticalSpacing="14";
nav_Navigation1.squareTab="Camel";
nav_Navigation1.mouseoverItalic="false";
nav_Navigation1.justification="left";
nav_Navigation1.imageWidth="";
nav_Navigation1.selectedUnderline="false";
nav_Navigation1.accentType="left";
nav_Navigation1.importedImage="";
nav_Navigation1.width="212";
nav_Navigation1.height="214";
nav_Navigation1.navName = "Navigation1";
nav_Navigation1.imagePath = "/~media/elements/LayoutClipart/../LayoutClipart/AccentGraphics/Accent_Square_Cream.gif";
nav_Navigation1.selectedImagePath = "/~media/elements/LayoutClipart/";
nav_Navigation1.mouseOverImagePath = "/~media/elements/LayoutClipart/";
nav_Navigation1.imageWidth = "16";
nav_Navigation1.imageHeight = "16";
nav_Navigation1.fontClass = "size14 Helvetica14";
nav_Navigation1.fontFace = "Helvetica, Arial, sans-serif";
var baseHref = '';
// this will only work if getElementsByTagName works
if (document.getElementsByTagName)
{
    // this will only work if we can find a base tag
    var base = document.getElementsByTagName('base');
    // Verify that the base object exists
    if (base && base.length > 0)
    {
        // if you don't specify a base href, href comes back as undefined
        if (base[0].href != undefined)
        {
            // get the base href
            baseHref = base[0].href;
            // add a trailing slash if base href doesn't already have one
            if (baseHref != '' && baseHref.charAt(baseHref.length - 1) != '/')
            {
                baseHref += '/';
            }
        }
    }
}
nav_Navigation1.links=new Array(6);
var nav_Navigation1_Link1 = new Object();
nav_Navigation1_Link1.type = "existing";
nav_Navigation1_Link1.displayName = "Home";
nav_Navigation1_Link1.linkWindow = "_self";
nav_Navigation1_Link1.linkValue = "index.html";
nav_Navigation1_Link1.linkIndex = "1";
nav_Navigation1.links[0] = nav_Navigation1_Link1;
var nav_Navigation1_Link2 = new Object();
nav_Navigation1_Link2.type = "existing";
nav_Navigation1_Link2.displayName = "Photo Gallery";
nav_Navigation1_Link2.linkWindow = "_self";
nav_Navigation1_Link2.linkValue = "Photo-Gallery.html";
nav_Navigation1_Link2.linkIndex = "2";
nav_Navigation1.links[1] = nav_Navigation1_Link2;
var nav_Navigation1_Link3 = new Object();
nav_Navigation1_Link3.type = "existing";
nav_Navigation1_Link3.displayName = "Contact Us";
nav_Navigation1_Link3.linkWindow = "_self";
nav_Navigation1_Link3.linkValue = "Contact-Us.html";
nav_Navigation1_Link3.linkIndex = "3";
nav_Navigation1.links[2] = nav_Navigation1_Link3;
var nav_Navigation1_Link4 = new Object();
nav_Navigation1_Link4.type = "existing";
nav_Navigation1_Link4.displayName = "Area Things To Do";
nav_Navigation1_Link4.linkWindow = "_self";
nav_Navigation1_Link4.linkValue = "About-Us.html";
nav_Navigation1_Link4.linkIndex = "4";
nav_Navigation1.links[3] = nav_Navigation1_Link4;
var nav_Navigation1_Link5 = new Object();
nav_Navigation1_Link5.type = "existing";
nav_Navigation1_Link5.displayName = "Area and Park Map";
nav_Navigation1_Link5.linkWindow = "_self";
nav_Navigation1_Link5.linkValue = "MAP.html";
nav_Navigation1_Link5.linkIndex = "5";
nav_Navigation1.links[4] = nav_Navigation1_Link5;
var nav_Navigation1_Link6 = new Object();
nav_Navigation1_Link6.type = "existing";
nav_Navigation1_Link6.displayName = "Park Rules ";
nav_Navigation1_Link6.linkWindow = "_self";
nav_Navigation1_Link6.linkValue = "Park-Rules-.html";
nav_Navigation1_Link6.linkIndex = "6";
nav_Navigation1.links[5] = nav_Navigation1_Link6;
function backgroundMouseOn(tdElement, newColor)
{
	if(tdElement != null) {
		tdElement.oldBGColor = tdElement.style.backgroundColor;
		tdElement.style.backgroundColor = newColor;
	}
}
function backgroundMouseOff(tdElement)
{
	if(tdElement != null) {
		tdElement.style.backgroundColor = tdElement.oldBGColor;
	}
} 
function doMouseChange(Navigation,tdElement,linkIndex,bisMouseOver) {
	if (Navigation.mouseoverEffect != 'true') {
		return;
	}	
	var link = Navigation.links[linkIndex-1];
	var bIsCurrentPage = isCurrentPage(link);
	var bShowMouseoverBg = !(bIsCurrentPage
			&& 'true' == Navigation.selectedEffect && Navigation.selectedBgcolor);
	var fontElement = getLinkFontElement(tdElement);
	if(fontElement != null) {
		doFontChange(Navigation,fontElement,bIsCurrentPage,bisMouseOver);
	}
	
	if (Navigation.mouseoverBgcolor && bShowMouseoverBg) {
		if(bisMouseOver) {
			backgroundMouseOn(tdElement,Navigation.mouseoverBgcolor);
		} else {
			backgroundMouseOff(tdElement);
		}
	}
}
function addStyle(Navigation, Link, tdElement,vNavTrElement) {
	if (tdElement == null) {
		return;
	}
	var strFontColor = Navigation.textColor;
	if ('true' == Navigation.selectedEffect) {
		if (Navigation.selectedTextcolor) {
			strFontColor = Navigation.selectedTextcolor;
		}
		if (Navigation.selectedBgcolor) {
			if (Navigation.orientation == 'horizontal') {
				tdElement.style.backgroundColor = Navigation.selectedBgcolor;
			} else {
				if (vNavTrElement != null) {
					vNavTrElement.style.backgroundColor = Navigation.selectedBgcolor;
				}
			}
		}
	}
	var fontElement = getLinkFontElement(tdElement);
	if (fontElement != null) {
		fontElement.style.color = strFontColor;
	}
	tdElement.style.color = strFontColor;
	if ('true' == Navigation.selectedEffect) {
		if ('true' == Navigation.selectedBold) {
			tdElement.style.fontWeight = "bold";
		}
		if ('true' == Navigation.selectedItalic) {
			tdElement.style.fontStyle = "italic";
		}
		if ('true' == Navigation.selectedUnderline) {
			tdElement.style.textDecoration = "underline";
		}
	}
}
// Combined escape html and javascript
function escapeHtmlInlineScript(s, escapeSingleQuotes, escapeDoubleQuotes){
	return htmlEncode(escapeScript(s, escapeSingleQuotes, escapeDoubleQuotes));
}
function htmlEncode(s){
	if (typeof(s) != "string") return "";
	
	var result = "";
	for (var i = 0; i < s.length; i++) {
		var ch = s.charAt(i);
		switch (ch) {
		case '<':
			result += "<";
			break;
		case '>':
			result += ">";
			break;
		case '&':
			result += "&";
			break;
		case '"':
			result += """;
			break;
		case "'":
			result += "'";
			break;
		default:
			result += ch;
		}
	}
	return result;
}
/* escapes slashes and quotes. the default is to escape quotes,
 * but this can be turned off.
 * this function is used for javascript and also for escaping urls
 * within background-image css.	 
 */
function escapeScript(s, escapeSingleQuotes, escapeDoubleQuotes){
	if (typeof(s) != "string") return "";
	
	var result = "";
	for (var i = 0; i < s.length; i++) {
		var ch = s.charAt(i);
		switch (ch) {
		case '\'':
			if (escapeSingleQuotes == null || escapeSingleQuotes)
				result += "\\\'";
			break;
		case '\"':
			if (escapeDoubleQuotes == null || escapeDoubleQuotes)
				result += "\\\"";
			break;
		case '\\':
			result += "\\\\";
			break;
		default:
			result += ch;
		}
	}
	return result;
}
//
// This .js file includes utility functions used by both graphical and text navs
// in their rendering.  User pages including a nav element will import this file, along
// with TextNavigation.js and GraphicNavigation.js.  The functions within will
// be called by the [navname].js file generated at publish time.
function fixLinkValue(Link)
{
	if(Link.type!='existing')
	{
		return Link.linkValue;
	}
	else
	{
		return baseHref + strRelativePathToRoot + Link.linkValue;
	}
}
function isCurrentPage(Link)
{
	if(Link.type!='existing')
	{
		return false;
	}
	var strLinkValue = Link.linkValue.toLowerCase();
	return (strRelativePagePath == strLinkValue);
}
function toggleOnMouseChange(fontElement,newColor, bold, underline, italic)
{
	if(fontElement == null) {
		return;
	}
	if(newColor)
	{
		fontElement.style.color=newColor;
	}
	fontElement.style.fontWeight = (bold=='true' ? 'bold' : 'normal');
	fontElement.style.textDecoration = (underline=='true' ? 'underline' : 'none');
	fontElement.style.fontStyle = (italic=='true' ? 'italic' : 'normal');
}
function doFontChange(Navigation,fontElement,bIsCurrentPage,bisMouseOver) {
	if(fontElement == null) {
		return;
	}
	var textColor;
	var baseTextColor = Navigation.textColor;
	var bold;
	var baseBold = Navigation.bold;
	var underline;
	var baseUnderline = Navigation.underline;
	var italic;
	var baseItalic = Navigation.italic;
	if (bIsCurrentPage && 'true' == Navigation.selectedEffect) {
		textColor = Navigation.selectedTextcolor ? Navigation.selectedTextcolor
				: (Navigation.mouseoverTextColor ? Navigation.mouseoverTextcolor
						: Navigation.textColor);
		baseTextColor = Navigation.selectedTextcolor ? Navigation.selectedTextcolor
				: Navigation.textColor;
		baseBold = bold = Navigation.selectedBold;
		baseUnderline = underline = Navigation.selectedUnderline;
		baseItalic = italic = Navigation.selectedItalic;
	} else {
		textColor = Navigation.mouseoverTextcolor ? Navigation.mouseoverTextcolor
				: Navigation.textColor;
		bold = Navigation.mouseoverBold;
		underline = Navigation.mouseoverUnderline;
		italic = Navigation.mouseoverItalic;
	}
	
	if(bisMouseOver) {
		toggleOnMouseChange(fontElement,textColor,bold,underline,italic);
	} else {
		toggleOnMouseChange(fontElement,baseTextColor,baseBold,baseUnderline,baseItalic);
	}
	
}
function addMouseAndStyleSupportNavigation1(Navigation,navTbId) {
	var startNode;
	if(typeof(nav_element_id) != 'undefined' && document.getElementById(nav_element_id) != null) {
		startNode = document.getElementById(nav_element_id);
			
	} else if(navTbId != null) {
		startNode = document.getElementById(navTbId);
			
	}
	
	if(startNode != null) {
	  searchForCurrentPageTd(Navigation,startNode);
	}
	
}
function searchForCurrentPageTd(Navigation,startNode) {
	
	if(startNode.childNodes != null) {
		for(var i=0;i<startNode.childNodes.length;i++){
			if(addStyleForCurrentPageTd(Navigation,startNode.childNodes[i])){
			   return;	
			} else {
			   searchForCurrentPageTd(Navigation,startNode.childNodes[i]);
			}
		}
	}
}
function addStyleForCurrentPageTd(Navigation,currentNode) {
	if(Navigation.orientation == 'horizontal') {
		if(currentNode.tagName == 'TD' && currentNode.id != '' && currentNode.id.indexOf(Navigation.navName+navTDLinkPart) != -1){
			var currentTDIdPrefix = Navigation.navName+navTDLinkPart;
			var linkId = currentNode.id.substring(currentTDIdPrefix.length,currentNode.id.length);
			if(isCurrentPage(Navigation.links[linkId-1]) == true) {
				addStyle(Navigation, Navigation.links[linkId-1],currentNode);
				return true;
			}
		}
	} else {
		if(currentNode.tagName == 'TR' && currentNode.id != '' && currentNode.id.indexOf(navTRLinkPrefix) != -1){	
			var currentTRIdPrefix = navTRLinkPrefix+Navigation.navName;
			var linkId = currentNode.id.substring(currentTRIdPrefix.length,currentNode.id.length);
			if(isCurrentPage(Navigation.links[linkId-1]) == true && currentNode.childNodes != null) {
				var currentPageTd;
				for(var i=0;currentNode.childNodes.length;i++) {
					if(typeof(currentNode.childNodes[i].tagName) != 'undefined' && currentNode.childNodes[i].tagName == 'TD' && currentNode.childNodes[i].id.indexOf(Navigation.navName+navTDLinkPart) != -1) {
						currentPageTd = currentNode.childNodes[i];
						addStyle(Navigation, Navigation.links[linkId - 1],currentPageTd,currentNode);
						return true;
					}
				}
			}
		}
	}
	return false;
}
function getChildElementFromTree(startNode,nodesToTraverse) {
	var currentChildNode = startNode;
	
	for(var n= 0;n<nodesToTraverse.length;n++) {
		currentChildNode = getMatchingChildByTag(currentChildNode.childNodes,nodesToTraverse[n]);
	}
	
	return currentChildNode;
}
function getMatchingChildByTag(childNodes,tagName) {
	var child;
	for(var i=0;childNodes.length;i++) {
		if(childNodes[i].tagName == tagName) {
			child = childNodes[i];
			break;
		}
	}
	return child;
}
function getLinkFontElement(tdElement){
	var fontElement;
	var aElement = getChildElementFromTree(tdElement,['A']);
	for(var i=0;i < aElement.childNodes.length;i++) {
		if(aElement.childNodes[i].tagName == 'DIV') {
		 	fontElement = getChildElementFromTree(aElement.childNodes[i],['FONT']);
		 	break;
		} else if(aElement.childNodes[i].tagName == 'FONT'){
		 	fontElement = 	aElement.childNodes[i];
		 	break;
		}
	
	}
	return fontElement;
}
	if(typeof(navTRLinkPrefix) == 'undefined') {
		navTRLinkPrefix = 'vNavTR_Link_';
	}
	if(typeof(navTDLinkPart) == 'undefined') {
		navTDLinkPart = '_Link';
	}
	if(document.getElementById('nav_version') == null) {
	if (typeof(navTBSuffix) == 'undefined') {
	navTBSuffix = 0;
	} else {navTBSuffix++;}
		document.write('<TABLE ID="ntb'+navTBSuffix+'"  CELLSPACING=\"0\" BORDER=\"0\" CELLPADDING=\"0\"><TR HEIGHT=\"2\" BGCOLOR=\"#FFFFFF\"><TD HEIGHT=\"2\" COLSPAN=\"3\"><IMG style=\"display: block;\" SRC=../../~navs/\"\/tp.gif\" HEIGHT=\"2\" ALT=\"\"><\/TD><\/TR><TR><TD WIDTH=\"2\" BGCOLOR=\"#FFFFFF\"><IMG style=\"display: block;\" SRC=../../~navs/\"\/tp.gif\" HEIGHT=\"2\" ALT=\"\"><\/TD><TD><TABLE ID=\"ntb\" CELLSPACING=\"0\" CELLPADDING=\"0\" BORDER=\"0\" ><TR id=\"vNavTR_Link_Navigation11\"><TD ALIGN=\"CENTER\"><IMG SRC=../../~navs/\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"16\" BORDER=\"0\"><IMG NAME=\"IDNavigation11\" SRC=../../~navs/\"\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/AccentGraphics\/Accent_Square_Cream.gif\" HEIGHT=\"16\" WIDTH=\"16\" BORDER=\"0\"><IMG SRC=../../~navs/\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"16\" BORDER=\"0\"><\/TD><TD ALIGN=\"left\" VALIGN=\"MIDDLE\" NOWRAP=\"NOWRAP\" id=\"Navigation1_Link1\" style=\"cursor: pointer;cursor: hand;color:#FFFFFF;font-size: 1px; line-height: 1px;font-weight: bold;font-style: italic;\" onmouseover=\"doMouseChange(nav_Navigation1,this,\'1\',true);\" onmouseout=\"doMouseChange(nav_Navigation1,this,\'1\',false);\"><A HREF=\"\/index.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;\" NAME=\"Home\"><IMG style=\"display: block;\" SRC=../../~navs/\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"7.0\" BORDER=\"0\">Home<\/FONT><IMG SRC=../../~navs/\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"1\" BORDER=\"0\"><IMG style=\"display: block;\" SRC=../../~navs/\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"7.0\" BORDER=\"0\"><\/A><\/TD><\/TR><TR id=\"vNavTR_Link_Navigation12\"><TD ALIGN=\"CENTER\"><IMG SRC=../../~navs/\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"16\" BORDER=\"0\"><IMG NAME=\"IDNavigation12\" SRC=../../~navs/\"\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/AccentGraphics\/Accent_Square_Cream.gif\" HEIGHT=\"16\" WIDTH=\"16\" BORDER=\"0\"><IMG SRC=../../~navs/\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"16\" BORDER=\"0\"><\/TD><TD ALIGN=\"left\" VALIGN=\"MIDDLE\" NOWRAP=\"NOWRAP\" id=\"Navigation1_Link2\" style=\"cursor: pointer;cursor: hand;color:#FFFFFF;font-size: 1px; line-height: 1px;font-weight: bold;font-style: italic;\" onmouseover=\"doMouseChange(nav_Navigation1,this,\'2\',true);\" onmouseout=\"doMouseChange(nav_Navigation1,this,\'2\',false);\"><A HREF=\"\/Photo-Gallery.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;\" NAME=\"Photo Gallery\"><IMG style=\"display: block;\" SRC=../../~navs/\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"7.0\" BORDER=\"0\">Photo Gallery<\/FONT><IMG SRC=../../~navs/\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"1\" BORDER=\"0\"><IMG style=\"display: block;\" SRC=../../~navs/\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"7.0\" BORDER=\"0\"><\/A><\/TD><\/TR><TR id=\"vNavTR_Link_Navigation13\"><TD ALIGN=\"CENTER\"><IMG SRC=../../~navs/\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"16\" BORDER=\"0\"><IMG NAME=\"IDNavigation13\" SRC=../../~navs/\"\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/AccentGraphics\/Accent_Square_Cream.gif\" HEIGHT=\"16\" WIDTH=\"16\" BORDER=\"0\"><IMG SRC=../../~navs/\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"16\" BORDER=\"0\"><\/TD><TD ALIGN=\"left\" VALIGN=\"MIDDLE\" NOWRAP=\"NOWRAP\" id=\"Navigation1_Link3\" style=\"cursor: pointer;cursor: hand;color:#FFFFFF;font-size: 1px; line-height: 1px;font-weight: bold;font-style: italic;\" onmouseover=\"doMouseChange(nav_Navigation1,this,\'3\',true);\" onmouseout=\"doMouseChange(nav_Navigation1,this,\'3\',false);\"><A HREF=\"\/Contact-Us.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;\" NAME=\"Contact Us\"><IMG style=\"display: block;\" SRC=../../~navs/\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"7.0\" BORDER=\"0\">Contact Us<\/FONT><IMG SRC=../../~navs/\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"1\" BORDER=\"0\"><IMG style=\"display: block;\" SRC=../../~navs/\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"7.0\" BORDER=\"0\"><\/A><\/TD><\/TR><TR id=\"vNavTR_Link_Navigation14\"><TD ALIGN=\"CENTER\"><IMG SRC=../../~navs/\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"16\" BORDER=\"0\"><IMG NAME=\"IDNavigation14\" SRC=../../~navs/\"\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/AccentGraphics\/Accent_Square_Cream.gif\" HEIGHT=\"16\" WIDTH=\"16\" BORDER=\"0\"><IMG SRC=../../~navs/\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"16\" BORDER=\"0\"><\/TD><TD ALIGN=\"left\" VALIGN=\"MIDDLE\" NOWRAP=\"NOWRAP\" id=\"Navigation1_Link4\" style=\"cursor: pointer;cursor: hand;color:#FFFFFF;font-size: 1px; line-height: 1px;font-weight: bold;font-style: italic;\" onmouseover=\"doMouseChange(nav_Navigation1,this,\'4\',true);\" onmouseout=\"doMouseChange(nav_Navigation1,this,\'4\',false);\"><A HREF=\"\/About-Us.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;\" NAME=\"Area Things To Do\"><IMG style=\"display: block;\" SRC=../../~navs/\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"7.0\" BORDER=\"0\">Area Things To Do<\/FONT><IMG SRC=../../~navs/\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"1\" BORDER=\"0\"><IMG style=\"display: block;\" SRC=../../~navs/\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"7.0\" BORDER=\"0\"><\/A><\/TD><\/TR><TR id=\"vNavTR_Link_Navigation15\"><TD ALIGN=\"CENTER\"><IMG SRC=../../~navs/\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"16\" BORDER=\"0\"><IMG NAME=\"IDNavigation15\" SRC=../../~navs/\"\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/AccentGraphics\/Accent_Square_Cream.gif\" HEIGHT=\"16\" WIDTH=\"16\" BORDER=\"0\"><IMG SRC=../../~navs/\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"16\" BORDER=\"0\"><\/TD><TD ALIGN=\"left\" VALIGN=\"MIDDLE\" NOWRAP=\"NOWRAP\" id=\"Navigation1_Link5\" style=\"cursor: pointer;cursor: hand;color:#FFFFFF;font-size: 1px; line-height: 1px;font-weight: bold;font-style: italic;\" onmouseover=\"doMouseChange(nav_Navigation1,this,\'5\',true);\" onmouseout=\"doMouseChange(nav_Navigation1,this,\'5\',false);\"><A HREF=\"\/MAP.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;\" NAME=\"Area and Park Map\"><IMG style=\"display: block;\" SRC=../../~navs/\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"7.0\" BORDER=\"0\">Area and Park Map<\/FONT><IMG SRC=../../~navs/\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"1\" BORDER=\"0\"><IMG style=\"display: block;\" SRC=../../~navs/\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"7.0\" BORDER=\"0\"><\/A><\/TD><\/TR><TR id=\"vNavTR_Link_Navigation16\"><TD ALIGN=\"CENTER\"><IMG SRC=../../~navs/\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"16\" BORDER=\"0\"><IMG NAME=\"IDNavigation16\" SRC=../../~navs/\"\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/AccentGraphics\/Accent_Square_Cream.gif\" HEIGHT=\"16\" WIDTH=\"16\" BORDER=\"0\"><IMG SRC=../../~navs/\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"16\" BORDER=\"0\"><\/TD><TD ALIGN=\"left\" VALIGN=\"MIDDLE\" NOWRAP=\"NOWRAP\" id=\"Navigation1_Link6\" style=\"cursor: pointer;cursor: hand;color:#FFFFFF;font-size: 1px; line-height: 1px;font-weight: bold;font-style: italic;\" onmouseover=\"doMouseChange(nav_Navigation1,this,\'6\',true);\" onmouseout=\"doMouseChange(nav_Navigation1,this,\'6\',false);\"><A HREF=\"\/Park-Rules-.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;\" NAME=\"Park Rules \"><IMG style=\"display: block;\" SRC=../../~navs/\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"7.0\" BORDER=\"0\">Park Rules <\/FONT><IMG SRC=../../~navs/\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"1\" BORDER=\"0\"><IMG style=\"display: block;\" SRC=../../~navs/\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"7.0\" BORDER=\"0\"><\/A><\/TD><\/TR><\/TABLE><\/TD><TD WIDTH=\"2\" BGCOLOR=\"#FFFFFF\"><IMG style=\"display: block;\" SRC=../../~navs/\"\/tp.gif\" HEIGHT=\"2\" ALT=\"\"><\/TD><\/TR><TR HEIGHT=\"2\" BGCOLOR=\"#FFFFFF\"><TD HEIGHT=\"2\" COLSPAN=\"3\"><IMG style=\"display: block;\" SRC=../../~navs/\"\/tp.gif\" HEIGHT=\"2\" ALT=\"\"><\/TD><\/TR><\/TABLE><script type="text/javascript">addMouseAndStyleSupportNavigation1(nav_Navigation1,"ntb'+navTBSuffix+'");'+'</scri'+'pt>');
	}
